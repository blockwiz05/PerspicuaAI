import spacy
import json
import requests
import traceback
from biorxiv_retrieval import get_biorxiv_abstracts
from predicate_avs import SummaryVerificationAVS  # Import the AVS class

# Load spaCy NLP model
nlp = spacy.load("en_core_web_sm")

# Initialize Predicate AVS
avs = SummaryVerificationAVS()  # Create an instance

def summarize_abstract(abstract):
    """Summarizes the abstract using spaCy NLP."""
    print("-" * 40)  # Separator
    print(f"Abstract:\n{abstract}")
    print("-" * 40)
    print("Summarizing abstract...")
    doc = nlp(abstract)
    keywords = [token.text for token in doc if token.is_alpha and not token.is_stop]
    summary = " ".join(keywords[:20])
    print(f"Generated Summary:\n{summary}")  # Clearer label and newline
    return summary

def verify_summary(summary, original_abstract):  # Modified to take original abstract
    """Verifies summary using Predicate AVS."""
    print("-" * 40)
    print("Verifying summary...")

    try:
        avs.verify(summary, original_abstract)  # Use Predicate AVS (no validator)
        print("Summary verified by AVS.")
        return True, "Summary verified by AVS"
    except ValueError as e:  # Catch ValueError (for local testing)
        print(f"AVS Verification failed: {e}")
        return False, f"AVS Verification failed: {e}"
    except Exception as e:  # Catch other exceptions too
        print(f"AVS Verification error: {e}")
        return False, f"AVS Verification error: {e}"

def store_on_ipfs(data):
    """Stores data on a local IPFS node."""
    print("-" * 40)
    print("Storing data on IPFS...")
    try:
        api_url = "http://localhost:5001/api/v0/add?wrap=true"
        data_bytes = json.dumps(data).encode('utf-8')
        files = {'file': ('data.json', data_bytes)}
        response = requests.post(api_url, files=files)

        if response.status_code == 200:
            result = response.json()
            ipfs_hash = result['Hash']
            print(f"Data stored on IPFS with hash: {ipfs_hash}")
            return ipfs_hash
        else:
            print(f"IPFS Error: {response.status_code} - {response.text}")
            return None

    except Exception as e:
        print(f"Python Error storing on IPFS: {e}")
        traceback.print_exc()
        return None

if _name_ == "_main_":
    server = input("Enter server (biorxiv/medrxiv): ").strip().lower()
    interval = input("Enter interval (e.g., '10d' or 'YYYY-MM-DD/YYYY-MM-DD'): ").strip()

    print("-" * 40)
    print(f"Fetching articles from {server} for interval: {interval}...")
    response = get_biorxiv_abstracts(server=server, interval=interval)

    if response["status"] != "Success":
        print(f"Error: {response['message']}")
    else:
        articles = response["data"]
        print("-" * 40)
        print(f"Found {len(articles)} articles.")

        if articles:  # Check if any articles were found
            a = articles[0]  # Process only the first article
            print("-" * 40)
            print("Processing the first article:")
            print(f"Title: {a['title']}")
            print(f"DOI: {a['doi']}")
            print(f"Link: {a['link']}")

            summary = summarize_abstract(a["abstract"])

            is_valid, message = verify_summary(summary, a["abstract"])  # Pass original abstract

            print(f"Summary:\n{summary}")
            print(f"Verification Status: {message}")

            ipfs_data = {  # Create the data dictionary before the if statement
                "title": a["title"],
                "doi": a["doi"],
                "summary": summary,
                "original_abstract": a["abstract"],
                "verification_status": message
            }

            if is_valid:
                print("Attempting to store article on IPFS...")
                ipfs_hash = store_on_ipfs(ipfs_data)  # Store the complete data
                if ipfs_hash:
                    print(f"Successfully stored on IPFS: {ipfs_hash}")
                else:
                    print("Failed to store on IPFS.")
            else:
                print("Skipping IPFS storage due to summary validation failure.")
                ipfs_hash = store_on_ipfs(ipfs_data)  # Store even if verification fails
                if ipfs_hash:
                    print(f"Stored failed verification data on IPFS: {ipfs_hash}")
                else:
                    print("Failed to store on IPFS.")
            print("-" * 40)
        else:
            print("No articles found for the specified criteria.")

import requests
import json
import traceback

def get_biorxiv_abstracts(server="biorxiv", interval="10d", cursor=0):
    """
    Fetch preprint metadata from bioRxiv or medRxiv.
    
    :param server: 'biorxiv' or 'medrxiv'
    :param interval: Write start date & end date 'YYYY-MM-DD/YYYY-MM-DD', or a number for N most recent articles
    :param cursor: Start index for paginated results
    :return: List of article metadata
    """
    try:
        url = f"https://api.biorxiv.org/pubs/{server}/{interval}/{cursor}"
        print(f"Fetching data from: {url}")

        response = requests.get(url)
        response.raise_for_status()
        data = response.json()

        articles = []
        if data and "collection" in data:
            for article in data["collection"]:
                articles.append({
                    "title": article.get("preprint_title", "No title"),
                    "doi": article.get("biorxiv_doi", ""),
                    "abstract": article.get("preprint_abstract", "No abstract"),
                    "authors": article.get("preprint_authors", "Unknown authors"),
                    "date": article.get("preprint_date", "Unknown date"),
                    "link": f"https://doi.org/{article.get('biorxiv_doi', '')}" if article.get("biorxiv_doi") else "No link"
                })
        else:
            print("No articles found.")
            return {"status": "No Data", "message": "No articles found for the given query", "data": []}

        return {"status": "Success", "message": "Articles fetched successfully", "data": articles}

    except requests.exceptions.RequestException as e:
        print(f"Error retrieving data: {e}")
        traceback.print_exc()
        return {"status": "Error", "message": str(e), "data": []}
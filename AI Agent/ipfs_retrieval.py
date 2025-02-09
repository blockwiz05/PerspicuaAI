import requests
import json
import traceback

def retrieve_from_ipfs(ipfs_hash):
    print(f"Retrieving data from IPFS with hash: {ipfs_hash}...")  # Indicate retrieval start
    try:
        api_url = f"http://localhost:5001/api/v0/cat"
        params = {'arg': ipfs_hash}
        response = requests.post(api_url, params=params)

        if response.status_code == 200:
            try:
                data = response.json()
                print("Data retrieved from IPFS (JSON):")  # Indicate JSON retrieval
                return data
            except json.JSONDecodeError:
                text_data = response.text
                print("Data retrieved from IPFS (text):")  # Indicate text retrieval
                return text_data  # Return raw text if not JSON
        else:
            print(f"Error retrieving from IPFS: {response.status_code} - {response.text}")
            return None

    except Exception as e:
        print(f"Error retrieving from IPFS: {e}")
        traceback.print_exc() # Print the full traceback for debugging
        return None

if _name_ == "_main_":
    ipfs_hash = input("Enter the IPFS hash: ")
    data = retrieve_from_ipfs(ipfs_hash)
    if data:
        print(json.dumps(data, indent=4))  # Print retrieved data
    else:
        print("Failed to retrieve data from IPFS")
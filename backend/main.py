# command: python main.py

# import files...
from dotenv import load_dotenv
import os

def main() : 
    load_dotenv()

    # feel free to change this code to test by yourself
    # call runningAI during meal time
    api_key = os.environ.get('TEST')
    print(api_key)

if __name__ == "__main__":
    main()
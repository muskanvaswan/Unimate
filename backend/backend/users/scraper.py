import requests
from bs4 import BeautifulSoup

def get_website(name):
    try:
        response = requests.get(
    	   url = f"https://en.wikipedia.org/wiki/{name}",
        )
        soup = BeautifulSoup(response.content, 'html.parser')

        website = soup.find_all('span', class_="url")[0]
        return website.a.get('href')
    except:
        return ''

def get_description(name):
    try:
        response = requests.get(
    	url = f"https://en.wikipedia.org/wiki/{name}",
        )
        soup = BeautifulSoup(response.content, 'html.parser')

        description = soup.find(id='mw-content-text').find_all('p')
        return description[1].get_text()
    except:
        return ''

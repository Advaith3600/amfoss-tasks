# importing necessary packages
import requests
import subprocess


# color scheme for output
class BColors:
    GREEN = '\033[92m'
    END = '\033[0m'


# fetching list of repositories owned/created by amFOSS
res = requests.get('https://api.github.com/orgs/amfoss/repos')
js = res.json()

# printing the total number of repositories
print(f"{BColors.GREEN}amFOSS organization has {len(js)} repositories{BColors.END}\n")

# looping through each repository
for item in js:
    url = item['html_url']

    # displaying the current repository being fetched
    print(f"{BColors.GREEN}Fetching commits from the repo {url}{BColors.END}")
    subprocess.run(f"perceval git --json-line {url} >> commits.json", shell=True)

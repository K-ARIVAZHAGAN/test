# Sample application configuration
# DO NOT commit this file with real secrets!

app_name = "TestApp"
debug_mode = true
port = 3000

# WRONG - These patterns would be caught by the hook:
# api + "_key" = "sk-" + "actual_secret_here"  
# "password" = "actual" + "password" + "here"
# github + "_token" = "ghp_" + "actual_token_here"

# CORRECT - Use environment variables instead:
# api_key = process.env.API_KEY
# password = process.env.DB_PASSWORD  
# github_token = process.env.GITHUB_TOKEN

# CORRECT - Use configuration placeholders:
api_key_placeholder = "YOUR_API_KEY_HERE"
password_placeholder = "YOUR_PASSWORD_HERE"
github_token_placeholder = "YOUR_GITHUB_TOKEN_HERE"
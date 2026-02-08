# Pre-commit Hook for Secret Detection

This repository is configured with a Git pre-commit hook that prevents committing files containing secret keys, API tokens, passwords, and other sensitive information.

## How it Works

The pre-commit hook scans all staged files for common patterns of secrets including:

- API keys (generic, AWS, Google, etc.)
- GitHub tokens
- Database passwords
- Private keys and certificates
- JWT tokens
- Discord, Slack, and other service tokens
- Files with suspicious extensions (.pem, .key, .pfx, etc.)

## Testing the Hook

1. **Stage the example config file:**
   ```bash
   git add config.example.js
   ```

2. **Try to commit:**
   ```bash
   git commit -m "Add config file"
   ```
   
   This should pass since the secrets are commented out.

3. **Test with a real secret:**
   Create a file with an actual API key and try to commit it - the hook will block it.

## What Happens When Secrets are Detected

- The commit is blocked
- Detailed information is shown about which files contain potential secrets
- Suggestions are provided for secure alternatives

## Best Practices

Instead of committing secrets directly:

1. **Use environment variables:**
   ```javascript
   const apiKey = process.env.API_KEY;
   ```

2. **Use configuration files in .gitignore:**
   - Create `config.js` for actual secrets
   - Add `config.js` to `.gitignore`
   - Provide `config.example.js` as a template

3. **Use secret management services:**
   - Azure Key Vault
   - AWS Secrets Manager
   - HashiCorp Vault

4. **Use dedicated tools:**
   - `git-secrets`
   - `detect-secrets`
   - `truffleHog`

## Hook Files

- `.git/hooks/pre-commit` - Main hook (shell script)
- `.git/hooks/pre-commit.ps1` - PowerShell version (Windows optimized)

## Bypassing the Hook (Emergency Only)

In extreme cases, you can bypass the hook with:
```bash
git commit --no-verify -m "Emergency commit"
```

**⚠️ WARNING: Only use this in emergencies and immediately fix the secrets after!**
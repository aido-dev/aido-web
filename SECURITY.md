# Security Policy

Thank you for taking the time to help keep Aido Web and its users safe.

Aido Web is a zero‑dependency static site. Most security risks for this repository are likely to involve secrets exposure, mixed content, headers/misconfigurations, or issues in third‑party embeds. We still treat all reports seriously.

## Supported Versions

- Main branch (latest) — security fixes apply here.  
- We do not maintain older snapshots of the site.

## Reporting a Vulnerability (Private)

Please report vulnerabilities privately via GitHub’s security advisories:

1) Go to the repository on GitHub (aido-dev/aido-web).  
2) Open Security → Advisories → “Report a vulnerability.”  
3) Provide details as described below. This creates a private thread with maintainers.

If private reporting is unavailable for any reason, open a minimal public issue that does not contain sensitive details and request a private channel. You may also ping the primary maintainer: @dvirdung.

Do not disclose vulnerabilities publicly until we have completed triage and coordinated disclosure.

## What to Include

- Summary: clear description, potential impact/severity (CVSS/CWE if known)
- Reproduction: step-by-step instructions or PoC
- Scope: affected files/URLs, commit SHA if relevant
- Environment: browser/version, OS, relevant headers or console output (sanitized)
- Mitigation ideas: optional, if you have suggestions

Please do not include live secrets, personal data, or information that violates privacy or law.

## Our Process

- Acknowledgment: within 3 business days
- Triage & Verification: we may request clarifications or PoCs
- Remediation: we’ll work on a fix or mitigation plan
- Coordination: we’ll agree on a public disclosure timeline after a fix/mitigation is available
- Credit: we’ll acknowledge you in release notes/NOTICE unless you prefer otherwise

Note: This project does not currently offer a bug bounty.

## Safe Harbor

We welcome good-faith research:
- Avoid data exfiltration, privacy violations, and service disruption.
- Limit the scope to what is necessary to demonstrate the issue.
- Comply with applicable laws and only test your own accounts/data.

## Out of Scope (examples)

- Social engineering, phishing, or physical security
- Issues in third-party services or dependencies not controlled by this repo
- Best-practice suggestions without a demonstrable security impact
- Self‑XSS or findings requiring unrealistic victim interaction
- Automated scan output with no actionable risk/impact
- Clickjacking on static pages without sensitive state changes

## Thank You

We appreciate responsible disclosure and your help in improving Aido Web’s security.
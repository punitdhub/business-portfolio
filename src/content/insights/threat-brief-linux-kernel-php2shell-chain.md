---
title: 'Threat Brief: Linux kernel flaw CVE-2026-46300 added to KEV, chained with PHP2Shell for root'
description: 'CISA says a Linux kernel bug can be chained with the PHP2Shell flaws to plant webshells and run commands as root. What is confirmed and what to check this week.'
pubDate: 2026-10-29
kind: threat-brief
confirmed: true
draft: false
tags: ['threat brief', 'linux kernel', 'php', 'cisa kev', 'privilege escalation', 'webshell']
sources:
  - title: 'CISA: Known Exploited Vulnerabilities Catalog (data feed)'
    url: 'https://www.cisa.gov/sites/default/files/feeds/known_exploited_vulnerabilities.json'
  - title: 'NIST NVD: CVE-2026-46300'
    url: 'https://nvd.nist.gov/vuln/detail/CVE-2026-46300'
  - title: 'NIST NVD: CVE-2026-109618'
    url: 'https://nvd.nist.gov/vuln/detail/CVE-2026-109618'
  - title: 'NIST NVD: CVE-2026-109619'
    url: 'https://nvd.nist.gov/vuln/detail/CVE-2026-109619'
  - title: 'Cisco: Vulnerabilities in PHP Affecting Cisco Products: October 2026'
    url: 'https://sec.cloudapps.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-php-october26-Jj384Daq'
---

On 2026-10-28, CISA added a Linux kernel vulnerability, CVE-2026-46300, to its Known Exploited Vulnerabilities (KEV) catalog. CISA's entry says the flaw "can be chained with CVE-2026-109618 and CVE-2026-109619 to implant PHP webshells and run commands as root." Those two PHP flaws, referred to as PHP2Shell, were already in KEV.

The kernel bug itself is not new. NVD published it on 2026-05-23, and kernel fixes have been available since then. What is new is the evidence that it is being exploited, and the link to an active PHP campaign.

## What is confirmed

- CISA added CVE-2026-46300 (Linux kernel) to KEV on 2026-10-28, with a federal remediation due date of 2026-10-31 and forensic triage marked "Yes" ([CISA KEV](https://www.cisa.gov/sites/default/files/feeds/known_exploited_vulnerabilities.json)).
- CISA added CVE-2026-109618 and CVE-2026-109619 (PHP) to KEV on 2026-10-26, with a due date of 2026-10-29. CISA describes both as allowing unauthenticated remote code execution.
- According to Cisco, the PHP Foundation announced a critical PHP security release on October 21 addressing both flaws, which are being referred to as PHP2shell. Cisco has published its own advisory listing affected Cisco products ([Cisco](https://sec.cloudapps.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-php-october26-Jj384Daq)).
- NVD rates CVE-2026-109618 critical (9.2) and CVE-2026-46300 high (7.8) ([NVD](https://nvd.nist.gov/vuln/detail/CVE-2026-46300)).

## Technical details

**The PHP flaws.** Per NVD, [CVE-2026-109618](https://nvd.nist.gov/vuln/detail/CVE-2026-109618) involves how PHP handles out-of-memory errors: some code paths leave request memory uninitialized, and later cleanup can read or branch on it. [CVE-2026-109619](https://nvd.nist.gov/vuln/detail/CVE-2026-109619) involves global state that can keep pointing into request memory after it has been freed. NVD says both can lead to remote code execution.

**The kernel flaw.** Per NVD, when the kernel merges network buffers during TCP receive, it can drop a marker that says the data is shared with the page cache. IPsec (ESP) input processing then decides it is safe to decrypt in place, and writes over page-cache-backed data. CISA describes the result as "unintended modification of page-cache-backed data." NVD's scoring treats it as a local attack that needs low privileges.

## What is not known yet

- Who is exploiting these flaws, and against which sectors.
- How widely the full chain has been used, as opposed to the PHP flaws alone.
- Indicators of compromise. None were published in the sources we reviewed.
- Reports say Palo Alto Networks has seen PHP2Shell exploitation against internet-exposed management interfaces. We have not yet verified this against Palo Alto's own advisory, so treat it as unconfirmed.

## Why it matters (our analysis)

This is a familiar pattern: remote code execution on a web application gives an attacker a low-privilege foothold, and a local kernel flaw turns that into root. On its own, a local kernel bug with a 7.8 score often waits for the next maintenance window. Chained behind a remotely exploitable PHP flaw, it becomes part of an internet-facing attack path.

Two things make this harder than a normal patch cycle. PHP is embedded in many products, including vendor appliances, so teams may not know every place it runs. And web servers are often the hosts where kernel updates lag behind application updates, because they need a reboot.

CISA's forensic triage flag is also worth noting. It suggests that patching alone may not be enough on hosts that were exposed before they were fixed.

## What to check this week

1. **Inventory PHP.** Find every host and appliance running PHP, including products from vendors like Cisco that publish their own advisories. Apply the PHP Foundation's October 21 security release or the vendor's fixed version.
2. **Patch kernels on internet-facing Linux hosts.** Prioritize web servers that run PHP. Check your distribution's errata for CVE-2026-46300 and schedule the reboot.
3. **Look for webshells.** Review web roots and upload directories for PHP files that are new or unexpected, and compare against known-good deployments.
4. **Check for root activity from web service accounts.** Look for processes spawned by the web server user that later run as root.
5. **Treat exposed, unpatched hosts as possibly compromised.** If a PHP host was internet-facing and unpatched after October 21, consider a forensic review, in line with CISA's triage flag, before returning it to normal service.

import get from "lodash/get.js";

const freeEmailDomains = ["gmail.com", "yandex.ru", "hotmail.com", "yahoo.com"];

// BEGIN
export default function getFreeDomainsCount(emails) {
  const domains = emails.map((email) => email.split("@")[1]);
  const freeDomains = domains.filter((domain) =>
    freeEmailDomains.includes(domain)
  );
  return freeDomains.reduce((acc, domain) => {
    if (!acc[domain]) {
      acc[domain] = 1;
    } else {
      acc[domain]++;
    }
    return acc;
  }, {});
}
// END

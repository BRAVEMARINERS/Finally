export const jobs = [
  { id: "chief-officer-tanker", title: "Chief Officer", company: "Oceanic Manning", vesselType: "Oil Tanker", location: "Singapore", salary: "$6,800 - $7,500", joinDate: "2026-04-12", match: "92%" },
  { id: "second-engineer-container", title: "Second Engineer", company: "NorthBlue Maritime", vesselType: "Container Vessel", location: "Rotterdam", salary: "$5,900 - $6,600", joinDate: "2026-04-28", match: "88%" },
  { id: "eto-lng-carrier", title: "ETO", company: "BlueGulf Shipping", vesselType: "LNG Carrier", location: "Doha", salary: "$7,400 - $8,100", joinDate: "2026-05-05", match: "84%" }
];
export const documents = [
  { type: "Passport", status: "Verified", expiry: "2028-06-20", alert: false },
  { type: "Medical Certificate", status: "Verified", expiry: "2026-05-18", alert: true },
  { type: "Seaman Book", status: "Pending", expiry: "2027-11-01", alert: false },
  { type: "GMDSS", status: "Verified", expiry: "2026-04-30", alert: true }
];
export const applicants = [
  { name: "Omar Hassan", rank: "Chief Officer", availability: "Ready in 12 days", score: "94" },
  { name: "Viktor Mladenov", rank: "Second Engineer", availability: "Ready now", score: "89" },
  { name: "Ahmed Salem", rank: "ETO", availability: "Ready in 18 days", score: "86" }
];
export const messages = [
  { from: "Oceanic Manning", subject: "Interview invitation", preview: "We would like to schedule a quick interview..." },
  { from: "NorthBlue Maritime", subject: "Document follow-up", preview: "Please upload your updated medical certificate..." }
];
export const notifications = [
  { title: "Medical certificate expires in 58 days", type: "alert" },
  { title: "A company viewed your profile", type: "activity" },
  { title: "New job matches available", type: "match" }
];

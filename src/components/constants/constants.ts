export const monthOptions = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
].map((month) => ({
  value: month,
  label: month,
}));

const gender = ["Male", "Female", "Others"];

const bloodgroup = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

export const bloodgroupOptions = bloodgroup?.map((item) => ({
  value: item,
  label: item,
}));
export const genderOptions = gender?.map((item) => ({
  value: item.toLowerCase(),
  label: item,
}));

export const nameOptions = [
  { value: "01", label: "Autumn" },
  { value: "02", label: "Summer" },
  { value: "03", label: "Fall" },
];

export const semestreStatusOptions = [
  { value: "UPCOMING", label: "Upcoming" },
  { value: "ONGOING", label: "Ongoing" },
  { value: "ENDED", label: "Ended" },
];

const currentYear = new Date().getFullYear();
export const yearOptions = [1, 2, 3, 4, 5].map((number) => ({
  value: String(currentYear + number),
  label: String(currentYear + number),
}));

const organ = [
  {
    Name: "Organ1",
    Lname: ["leader1", "leader2", "leader3", "leader4", "leader5"],
  },
  {
    Name: "Organ2",
    Lname: ["leader11", "leader12", "leader13", "leader14", "leader15"],
  },
  {
    Name: "Organ3",
    Lname: ["leader111", "leader112", "leader113", "leader114", "leader115"],
  },
  {
    Name: "Organ4",
    Lname: [
      "leader1111",
      "leader1112",
      "leader1113",
      "leader1114",
      "leader1115",
    ],
  },
  {
    Name: "Organ5",
    Lname: [
      "leader11111",
      "leader11112",
      "leader11113",
      "leader11114",
      "leader11115",
    ],
  }
].sort((a, b) => a.Name.localeCompare(b.Name))
  .map((org) => ({
    ...org,
    Lname: org.Lname.sort((a, b) => a.localeCompare(b)),
  }));

export default organ;

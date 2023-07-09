const organ = [
  {
    Name: "Air Tour",
    Lname: ["Pooria Rahimi", "Ali Namazi", "Kimia Naseri"],
  },
  {
    Name: "TravelMt",
    Lname: ["Ali Karami", "Mohammad Akbari"],
  }

].sort((a, b) => a.Name.localeCompare(b.Name))
  .map((org) => ({
    ...org,
    Lname: org.Lname.sort((a, b) => a.localeCompare(b)),
  }));

export default organ;

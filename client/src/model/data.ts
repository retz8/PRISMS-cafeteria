export type Data = {
  date: string;
  type: "breakfast" | "lunch" | "dinner" | "brunch";
  start: string;
  end: string;
  number: string; // separated by commas
  total: number;
};

export type MockData = {
  date: string;
  type: string;
  start: string;
  end: string;
  number: string; // separated by commas
  total: number;
};

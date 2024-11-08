import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Button,
  Container,
  Card,
  CardContent,
} from "@mui/material";

const ColorButton = styled(Button)(() => ({
  color: "#fff",
  width: 250,
  height: 55,
  fontWeight: 700,
  fontSize: "16px",
  textTransform: "capitalize",
  backgroundColor: "#3CAB34",
  borderColor: "#3CAB34",
  "&:hover": {
    color: "#fff",
    backgroundColor: "#9ACB34",
    borderColor: "#9ACB34",
  },
}));

const wasteData = {
  "Pet Bottles": { perKgPrice: 300, itemsPerKg: 37 },
  "Pure Water Sachets": { perKgPrice: 50, itemsPerKg: 1 }, // Assuming 1 sachet = 1 kg
  Tin: { perKgPrice: 300, itemsPerKg: 1 },
  Cans: { perKgPrice: 800, itemsPerKg: 1 },
  Nylons: { perKgPrice: 300, itemsPerKg: 1 },
  Plastics: { perKgPrice: 150, itemsPerKg: 1 },
};

function TheCalculator() {
  const [wasteType, setWasteType] = useState("");
  const [numItems, setNumItems] = useState("");
  const [totalCash, setTotalCash] = useState(null);

  const handleCalculate = () => {
    if (wasteType && numItems) {
      const { perKgPrice, itemsPerKg } = wasteData[wasteType];
      const kg = numItems / itemsPerKg;
      const cash = kg * perKgPrice;
      setTotalCash(cash);
    } else {
      setTotalCash(null);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Card>
        <CardContent sx={{ margin: "5% 0%" }}>
          <Typography
            variant="h4"
            align="center"
            color={"#3CAB34"}
            fontWeight={300}
            gutterBottom
          >
            Trash for Cash Calculator
          </Typography>
          <Box sx={{ mt: 2 }}>
            <TextField
              select
              fullWidth
              placeholder="Select Waste Type"
              value={wasteType}
              onChange={(e) => setWasteType(e.target.value)}
              variant="outlined"
              margin="normal"
            >
              {Object.keys(wasteData).map((type) => (
                <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              fullWidth
              placeholder="Number of Items in Kg"
              type="number"
              value={numItems}
              onChange={(e) => setNumItems(e.target.value)}
              variant="outlined"
              margin="normal"
            />
            <ColorButton
              fullWidth
              variant="contained"
              onClick={handleCalculate}
              sx={{ mt: 2 }}
            >
              Calculate Cash
            </ColorButton>
            {totalCash !== null && (
              <Typography variant="h6" align="center" sx={{ mt: 2 }}>
                You will receive: ₦{totalCash.toFixed(2)}
              </Typography>
            )}
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

export default TheCalculator;

import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
  Grid,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#A52A2A', '#8A2BE2'];

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    background: {
      default: '#ffffff',
    },
  },
  typography: {
    h6: {
      fontWeight: 600,
    },
  },
});

const FreightCharge = ({ rows }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  const onPieLeave = () => {
    setActiveIndex(null);
  };

  const data = rows.slice(0, -1).map((row) => ({
    name: row.productName,
    value: row.cost,
  }));

  return (
    <ThemeProvider theme={theme}>
      <Box className="w-full flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <Grid item xs={12} md={7} className="flex-1 p-0">
          <Box
            component={Paper}
            p={4}
            boxShadow={5}
            borderRadius={2}
            borderColor="primary.main"
            className="m-0"
          >
            <Typography variant="h6" color="#EA5A00" gutterBottom>
              Complete Breakdown of Cost
            </Typography>
            <TableContainer>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left" style={{ fontWeight: 'bold' }}>Associated Charges</TableCell>
                    <TableCell align="right" style={{ fontWeight: 'bold' }}>Cost</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.slice(0, -1).map((row, index) => (
                    <TableRow key={index} style={{ fontWeight: index === rows.length - 2 ? 'bold' : 'normal' }}>
                      <TableCell align="left">{row.productName}</TableCell>
                      <TableCell align="right">₹ {row.cost}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>

                <TableHead>
                  <TableRow>
                    <TableCell align="left" style={{ fontWeight: 'bold' }}>Total Cost</TableCell>
                    <TableCell align="right" style={{ fontWeight: 'bold' }}>₹ {rows[7].cost}</TableCell>
                  </TableRow>
                </TableHead>
              </Table>
            </TableContainer>
          </Box>
        </Grid>
        <Grid item xs={12} md={5} className="flex-1 p-0">
          <Box
            component={Paper}
            p={4}
            boxShadow={3}
            borderRadius={2}
            borderColor="primary.main"
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100%"
            className="m-0"
          >
            <Box>
              <PieChart width={300} height={350}>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                  onMouseEnter={onPieEnter}
                  onMouseLeave={onPieLeave}
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                      fillOpacity={1}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </Box>
          </Box>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

// Export the component
export default FreightCharge;

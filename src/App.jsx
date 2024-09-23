import { ChakraProvider } from "@chakra-ui/react";
import { AlertProvider } from "./context/alertContext";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;

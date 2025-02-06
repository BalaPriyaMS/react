import { useState } from "react";
import "./App.css";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Card, CardContent, CardTitle } from "./components/ui/card";

function App() {
  function handleWelcome(names?: string) {
    if (names) {
      return names;
    }
    return "enter name";
  }

  const [names, setName] = useState(handleWelcome("priya"));
  const [inputName, setInputName] = useState("");

  return (
    <>
      <div className="flex justify-center items-center p-10 overflow-hidden h-screen">
        <Card className="p-6 ">
          <CardTitle>Welcome Card</CardTitle>
          <CardContent className="p-10 flex flex-col gap-5">
            <Input
              className="w-40"
              type="text"
              value={inputName}
              onChange={(e) => {
                setInputName(e.target.value);
              }}
              placeholder="enter the name"
            />
            <Button
              onClick={() => {
                setName(inputName);
              }}
            >
              welcome
            </Button>
            <p>Welcome {names} </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default App;

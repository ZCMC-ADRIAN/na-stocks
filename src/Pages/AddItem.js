import React, { useState, useSyncExternalStore } from "react";

import {
  Container,
  GridItem,
  SimpleGrid,
  FormControl,
  FormLabel,
  Select,
  Input,
  Checkbox,
  Button,
} from "@chakra-ui/react";

const AddItem = () => {
  const [check, setCheck] = useState("A");
  const [reference, setReference] = useState('')

  console.log(check)

  const handleChange = (e) => {
    if (e.target.checked) {
      setCheck("A");
    } else {
      setCheck("D");
    }
  };

  return (
    <>
      <div className="container">
        <Container
          boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"
          bg="#fff"
          padding={5}
          marginTop={5}
          borderRadius={8}
          maxW="container.md"
          w="full"
          h="auto"
          //   overflowY={"scroll"}
        >
          <form autoComplete="off">
            <SimpleGrid
              columns={6}
              rowGap={5}
              columnGap={6}
              boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 4px 0px;"
              border="1px solid #e8ebf2"
              w="full"
              padding={6}
            >
              <GridItem colSpan={2}>
                <FormControl>
                  <FormLabel>Section</FormLabel>
                  <Select placeholder=" -- Section -- ">
                    <option>Sample</option>
                  </Select>
                </FormControl>
              </GridItem>

              <GridItem colSpan={2}>
                <FormControl>
                  <FormLabel>Name</FormLabel>
                  <Input isDisabled></Input>
                </FormControl>
              </GridItem>

              <GridItem colSpan={2}>
                <FormControl>
                  <FormLabel>Date</FormLabel>
                  <Input type="date"></Input>
                </FormControl>
              </GridItem>

              <GridItem colSpan={2}>
                <FormControl>
                  <FormLabel>Reference No.</FormLabel>
                  <Select
                  placeholder="--Reference No.--"
                  ></Select>
                </FormControl>
              </GridItem>

              <GridItem colSpan={2}>
                <FormControl>
                  <FormLabel>Control No.</FormLabel>
                  <Input type="text"></Input>
                </FormControl>
              </GridItem>
            </SimpleGrid>

            <SimpleGrid
              columns={6}
              rowGap={5}
              columnGap={6}
              w="full"
              padding={6}
              border="1px solid #e8ebf2"
              boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 4px 0px;"
              marginTop={5}
            >
              <GridItem colSpan={2}>
                <FormControl>
                  <FormLabel>Item Description</FormLabel>
                  <Input type="text"></Input>
                </FormControl>
              </GridItem>

              <GridItem colSpan={2}>
                <FormControl>
                  <FormLabel>Quantity</FormLabel>
                  <Input type="text"></Input>
                </FormControl>
              </GridItem>

              <GridItem colSpan={2}>
                <FormControl>
                  <FormLabel>UOM</FormLabel>
                  <Input type="text"></Input>
                </FormControl>
              </GridItem>

              <GridItem colSpan={2}>
                <FormControl>
                  <FormLabel>Unit Price</FormLabel>
                  <Input type="text"></Input>
                </FormControl>
              </GridItem>

              <GridItem colSpan={2}>
                <FormLabel>Status A/D</FormLabel>
                <Checkbox
                  size="lg"
                  defaultChecked
                  colorScheme="orange"
                  onChange={handleChange}
                ></Checkbox>
              </GridItem>
            </SimpleGrid>

            <GridItem colSpan={6} marginTop={10}>
              <Button
                color="#fff"
                w={200}
                backgroundColor="#0078AA"
                _hover={{ background: "#0078AA" }}
                type="submit"
              >
                Submit
              </Button>

              <Button
                ml={10}
                w={200}
                color="#fff"
                backgroundColor="#02bf7a"
                _hover={{ background: "#15bd7c" }}
                // onClick={monthly}
              >
                Generate Report
              </Button>
            </GridItem>
          </form>
        </Container>
      </div>
    </>
  );
};

export default AddItem;

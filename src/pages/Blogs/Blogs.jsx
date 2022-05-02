import React from "react";
import { AiFillQuestionCircle } from "react-icons/ai";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

const Blogs = () => {
  return (
    <div className="mx-auto w-8/12 container py-20">
      <h2 className="text-center mb-3 text-4xl font-bold primary-color">
        FREQUENTLY ASK <span className="text-yellow-400">QUESTION</span>
      </h2>
      <div className="h-1 w-24 rounded-lg bg-blue-400 mx-auto mb-12"></div>
      <Accordion className="border rounded box-shadow duration-500">
        <AccordionItem>
          <AccordionItemHeading className="border-b  p-3 rounded">
            <AccordionItemButton className="text-2xl font-bold text-blue-400 flex items-center">
              <AiFillQuestionCircle className="mr-2"></AiFillQuestionCircle>
              WHAT IS THE DIFFERENCE BETWEEN JAVASCRIPT AND NODEJS?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
              occaecat ut occaecat consequat est minim minim esse tempor laborum
              consequat esse adipisicing eu reprehenderit enim.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Is free will real or just an illusion?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              In ad velit in ex nostrud dolore cupidatat consectetur ea in ut
              nostrud velit in irure cillum tempor laboris sed adipisicing eu
              esse duis nulla non.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Is free will real or just an illusion?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              In ad velit in ex nostrud dolore cupidatat consectetur ea in ut
              nostrud velit in irure cillum tempor laboris sed adipisicing eu
              esse duis nulla non.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Is free will real or just an illusion?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              In ad velit in ex nostrud dolore cupidatat consectetur ea in ut
              nostrud velit in irure cillum tempor laboris sed adipisicing eu
              esse duis nulla non.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Blogs;

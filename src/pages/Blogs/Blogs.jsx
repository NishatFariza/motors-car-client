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
      <Accordion className="rounded duration-500 ">
        <AccordionItem className="box-shadow rounded duration-500">
          <AccordionItemHeading className="border-t  py-6 px-3 rounded">
            <AccordionItemButton className="text-2xl font-bold text-blue-400 flex items-center">
              <AiFillQuestionCircle className="mr-2"></AiFillQuestionCircle>
              WHAT IS THE DIFFERENCE BETWEEN JAVASCRIPT AND NODE.JS?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="border-b">
            <p className="px-4 pt-8">
              <strong className="underline primary-color font-bold text-justify">
                JavaScript:
              </strong>
              Javascript is a programming language that is used for writing
              scripts on the website. It is basically used on the client-side.
              It is capable enough to add HTML and play with the DOM. Javascript
              can run in any browser engine as like JS core in safari and
              Spidermonkey in Firefox. It is the upgraded version of ECMA scrip
              that uses Chrome’s V8 engine written in C++. Some of the
              javascript frameworks are RamdaJS, TypedJS, etc.
            </p>
            <p className="px-4 py-8">
              <strong className="underline primary-color font-bold">
                NodeJS:
              </strong>
              NodeJS is a Javascript runtime environment. It is mostly used on
              the server-side. Nodejs does not have capability to add HTML tags.
              V8 is the Javascript engine inside of node.js that parses and runs
              Javascript. Nodejs is written in C, C++ and Javascript. Some of
              the Nodejs modules are Lodash, express etc. These modules are to
              be imported from npm.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="box-shadow border-y rounded duration-500">
          <AccordionItemHeading className="border-y-b  py-6 px-3 rounded">
            <AccordionItemButton className="text-2xl font-bold text-blue-400 flex items-center">
              <AiFillQuestionCircle className="mr-2"></AiFillQuestionCircle>
              WHY SHOULD WE USE NODE.JS? AND WHY SHOULD WE USE MONGODB?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="border-b">
            <p className="px-4 pt-8">
              <strong className="underline primary-color font-bold text-justify">
                Purpose Of NodeJS:
              </strong>
              Node.js is an open source, a server-side script which runs on the
              top of Google’s open-source scripting engine V8. Node.js is fast,
              lightweight and efficient. It uses the asynchronous mode of
              operation, event-driven Input/Output rather than using the
              traditional threads or separate threads for each process.These are
              the libraries which are built by the awesome community which will
              solve almost all the generic problems related to the
              Node.js.Overall it increases the efficiency of the development
              process as it fills the gap between frontend and backend
              applications.
            </p>
            <p className="px-4 py-8">
              <strong className="underline primary-color font-bold">
                Purpose Of MongoDB:
              </strong>
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="box-shadow border-b rounded duration-500">
          <AccordionItemHeading className="  py-6 px-3 rounded">
            <AccordionItemButton className="text-2xl font-bold text-blue-400 flex items-center">
              <AiFillQuestionCircle className="mr-2"></AiFillQuestionCircle>
              WHAT IS THE DIFFERENCE BETWEEN JAVASCRIPT AND NODE.JS?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="border-y ">
            <p className="px-4 pt-8">
              <strong className="underline primary-color font-bold text-justify">
                JavaScript:
              </strong>
              Javascript is a programming language that is used for writing
              scripts on the website. It is basically used on the client-side.
              It is capable enough to add HTML and play with the DOM. Javascript
              can run in any browser engine as like JS core in safari and
              Spidermonkey in Firefox. It is the upgraded version of ECMA scrip
              that uses Chrome’s V8 engine written in C++. Some of the
              javascript frameworks are RamdaJS, TypedJS, etc.
            </p>
            <p className="px-4 py-8">
              <strong className="underline primary-color font-bold">
                NodeJS:
              </strong>
              NodeJS is a Javascript runtime environment. It is mostly used on
              the server-side. Nodejs does not have capability to add HTML tags.
              V8 is the Javascript engine inside of node.js that parses and runs
              Javascript. Nodejs is written in C, C++ and Javascript. Some of
              the Nodejs modules are Lodash, express etc. These modules are to
              be imported from npm.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="box-shadow border-b rounded duration-500">
          <AccordionItemHeading className=" py-6 px-3 rounded">
            <AccordionItemButton className="text-2xl font-bold text-blue-400 flex items-center">
              <AiFillQuestionCircle className="mr-2"></AiFillQuestionCircle>
              WHAT IS THE DIFFERENCE BETWEEN JAVASCRIPT AND NODE.JS?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p className="px-4 pt-8">
              <strong className="underline primary-color font-bold text-justify">
                JavaScript:
              </strong>
              Javascript is a programming language that is used for writing
              scripts on the website. It is basically used on the client-side.
              It is capable enough to add HTML and play with the DOM. Javascript
              can run in any browser engine as like JS core in safari and
              Spidermonkey in Firefox. It is the upgraded version of ECMA scrip
              that uses Chrome’s V8 engine written in C++. Some of the
              javascript frameworks are RamdaJS, TypedJS, etc.
            </p>
            <p className="px-4 py-8">
              <strong className="underline primary-color font-bold">
                NodeJS:
              </strong>
              NodeJS is a Javascript runtime environment. It is mostly used on
              the server-side. Nodejs does not have capability to add HTML tags.
              V8 is the Javascript engine inside of node.js that parses and runs
              Javascript. Nodejs is written in C, C++ and Javascript. Some of
              the Nodejs modules are Lodash, express etc. These modules are to
              be imported from npm.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Blogs;

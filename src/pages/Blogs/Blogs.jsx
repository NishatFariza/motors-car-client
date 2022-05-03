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
    <div className="mx-auto w-9/12 container py-20">
      <h2 className="text-center mb-3 text-4xl font-bold primary-color">
        FREQUENTLY ASK <span className="text-yellow-400">QUESTION</span>
      </h2>
      <div className="h-1 w-24 rounded-lg bg-blue-400 mx-auto mb-12"></div>
      <Accordion className="rounded duration-500 ">
        <AccordionItem className="box-shadow rounded duration-500">
          <AccordionItemHeading className="border-t  py-6 px-3 rounded">
            <AccordionItemButton className="text-2xl font-bold text-blue-400 flex items-center">
              <AiFillQuestionCircle className="mr-2"></AiFillQuestionCircle>
              What is The Different Between JavaScript And NodeJS?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="border-b">
            <p className="px-6 pt-3 border-t">
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
            <p className="px-6 py-8">
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
              When Should We Use NodeJS? And When Should We Use MongoDB?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p className="px-6 pt-3 border-t">
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
            <p className="px-6 py-8">
              <strong className="underline primary-color font-bold">
                Purpose Of MongoDB:
              </strong>
              MongoDB is an open source NoSQL database management program. so we
              need to understand when and When we need to use this type of
              database in the real-life applications. Since in normal
              circumstances, MongoDB always preferred by the developers or
              project managers when our main concern is the deal with large
              volume of data with a high performance. If we want to insert
              thousands of records in a second, then MongoDB is the best choice
              for that. Also, horizontal scaling (adding new columns) is not so
              easy process in any RDBMS systems. But in case of MongoDB, it is
              very much easy since it is a schema less database.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="box-shadow border-b rounded duration-500">
          <AccordionItemHeading className="  py-6 px-3 rounded">
            <AccordionItemButton className="text-2xl font-bold text-blue-400 flex items-center">
              <AiFillQuestionCircle className="mr-2"></AiFillQuestionCircle>
              What is The Different Between SQL And NoSQL?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="border-y ">
            <p className="px-6 pt-3 border-t">
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
            <p className="px-6 py-8">
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
            <p className="px-6 pt-3 border-t">
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
            <p className="px-6 py-8">
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

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
    <div className="mx-auto w-9/12 container sm:py-20 py-10">
      <h2 className="text-center mb-3 sm:text-4xl text-2xl font-bold primary-color">
        FREQUENTLY ASK <span className="text-yellow-400">QUESTION</span>
      </h2>
      <div className="h-1 w-24 rounded-lg bg-blue-400 mx-auto mb-12"></div>
      <Accordion className="rounded duration-500 ">
        <AccordionItem className="box-shadow rounded duration-500">
          <AccordionItemHeading className="border-t  sm:py-6 py-3 px-3 rounded">
            <AccordionItemButton className="sm:text-2xl text-xl font-bold text-blue-400 flex items-start">
              <AiFillQuestionCircle className="mr-2 sm:text-2xl text-4xl flex items-start"></AiFillQuestionCircle>
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
            <AccordionItemButton className="sm:text-2xl text-xl font-bold text-blue-400 flex items-center">
              <AiFillQuestionCircle className="mr-2 sm:text-2xl text-4xl flex items-start"></AiFillQuestionCircle>
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
            <AccordionItemButton className="sm:text-2xl text-xl font-bold text-blue-400 flex items-center">
              <AiFillQuestionCircle className="mr-2 sm:text-2xl text-4xl flex items-start"></AiFillQuestionCircle>
              What is The Different Between SQL And NoSQL?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="border-y ">
            <p className="px-6 pt-3 border-t">
              <strong className="underline primary-color font-bold text-justify">
                SQL:
              </strong>
              SQL databases are primarily called as Relational Databases
              (RDBMS). SQL databases defines and manipulates data based
              structured query language (SQL). In almost all situations SQL
              databases are vertically scalable. This means that you can
              increase the load on a single server by increasing things like
              RAM, CPU or SSD. SQL databases are table-based. SQL databases
              follow ACID properties (Atomicity, Consistency, Isolation and
              Durability). Great support is available for all SQL database from
              their vendors. Also a lot of independent consultations are there
              who can help you with SQL database for a very large scale
              deployments.
            </p>
            <p className="px-6 py-8">
              <strong className="underline primary-color font-bold">
                NoSQL:
              </strong>
              NoSQL database are primarily called as non-relational or
              distributed database. A NoSQL database has dynamic schema for
              unstructured data. Data is stored in many ways which means it can
              be document-oriented, column-oriented, graph-based or organized as
              a KeyValue store. NoSQL databases are horizontally scalable. NoSQL
              databases are either key-value pairs, document-based, graph
              databases or wide-column stores. The NoSQL database follows the
              Brewers CAP theorem (Consistency, Availability and Partition
              tolerance). NoSQL database you still have to rely on community
              support and only limited outside experts are available for setting
              up and deploying your large scale NoSQL deployments.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="box-shadow border-b rounded duration-500">
          <AccordionItemHeading className=" py-6 px-3 rounded">
            <AccordionItemButton className="sm:text-2xl text-xl font-bold text-blue-400 flex items-center">
              <AiFillQuestionCircle className="mr-2 sm:text-2xl text-4xl flex items-start"></AiFillQuestionCircle>
              What is The Purpose of JWT? How dose Work JWT?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p className="px-6 pt-3 border-t">
              <strong className="underline primary-color font-bold text-justify">
                JWT:
              </strong>
              JSON Web Token (JWT) is an open standard (RFC 7519) that defines a
              compact and self-contained way for securely transmitting
              information between parties as a JSON object. This information can
              be verified and trusted because it is digitally signed. JWTs can
              be signed using a secret (with the HMAC algorithm) or a
              public/private key pair using RSA or ECDSA. When tokens are signed
              using public/private key pairs, the signature also certifies that
              only the party holding the private key is the one that signed it.
            </p>
            <p className="px-6 py-8">
              <strong className="underline primary-color font-bold">
                Jwt Work:
              </strong>
              JWTs differ from other web tokens in that they contain a set of
              claims. Claims are used to transmit information between two
              parties. A JWT is a string made up of three parts, separated by
              dots (.), and serialized using base64. In the most common
              serialization format, compact serialization, the JWT looks
              something like this: xxxxx.yyyyy.zzzzz. Once decoded, you will get
              two JSON strings: The header, The payload And The signature. The
              JOSE (JSON Object Signing and Encryption) header contains the type
              of token JWT in this case and the signing algorithm.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Blogs;

import React from "react";
import { AiFillQuestionCircle } from "react-icons/ai";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { Zoom } from "react-reveal";

const Blogs = () => {
  return (
    <Zoom>
      <div className="mx-auto sm:w-9/12 w-11/12 container sm:py-20 py-10">
        <h2 className="text-center mb-3 sm:text-4xl text-2xl font-bold primary-color">
          FREQUENTLY ASK <span className="text-yellow-400">QUESTION</span>
        </h2>
        <div className="h-1 w-24 rounded-lg bg-blue-400 mx-auto mb-12"></div>
        <Accordion className="rounded duration-500 ">
          <AccordionItem className="box-shadow rounded duration-500">
            <AccordionItemHeading className="border-t  sm:py-6 py-3 sm:px-3 px-0 rounded">
              <AccordionItemButton className="sm:text-2xl text-xl font-bold text-blue-400 flex items-start">
                <AiFillQuestionCircle className="mr-2 sm:text-2xl text-4xl flex items-start"></AiFillQuestionCircle>
                What is The Different Between JavaScript And NodeJS?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="border-b">
              <p className="sm:px-6 px-3 pt-3 border-t sm:text-base text-sm">
                <strong className="underline primary-color font-bold text-justify">
                  JavaScript:
                </strong>
                Javascript is a programming language that is used for writing
                scripts on the website. It is basically used on the client-side.
                It is capable enough to add HTML and play with the DOM.
                Javascript can run in any browser engine as like JS core in
                safari and Spidermonkey in Firefox. It is the upgraded version
                of ECMA scrip that uses Chrome’s V8 engine written in C++. Some
                of the javascript frameworks are RamdaJS, TypedJS, etc.
              </p>
              <p className="sm:px-6 px-3 sm:text-base text-sm py-8">
                <strong className="underline primary-color font-bold">
                  NodeJS:
                </strong>
                NodeJS is a Javascript runtime environment. It is mostly used on
                the server-side. Nodejs does not have capability to add HTML
                tags. V8 is the Javascript engine inside of node.js that parses
                and runs Javascript. Nodejs is written in C, C++ and Javascript.
                Some of the Nodejs modules are Lodash, express etc. These
                modules are to be imported from npm.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem className="box-shadow border-y rounded duration-500">
            <AccordionItemHeading className="border-y-b  py-6 sm:px-3 px-0 rounded">
              <AccordionItemButton className="sm:text-2xl text-xl font-bold text-blue-400 flex items-center">
                <AiFillQuestionCircle className="mr-2 sm:text-2xl text-4xl flex items-start"></AiFillQuestionCircle>
                When Should We Use NodeJS? And When Should We Use MongoDB?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className="sm:px-6 px-3 sm:text-base text-sm pt-3 border-t">
                <strong className="underline primary-color font-bold text-justify">
                  Reasons for using NodeJS:
                </strong>
                Nodejs is a Javascript engine that you can write any application
                you want with (by programming in the Javascript language). It
                runs your Javascript code. Most commonly, it is used to build
                servers that can respond to web requests, though it can be used
                for lots of other types of code too.Any project needs a
                programming environment and a runtime library that offers you
                basic programming tools/support and can compile and/or interpret
                your code. Nodejs is such as tool for the Javascript programming
                language. There are other similar tools for other languages such
                as Python, Java, PHP, C#, C++, Go, etc...
                <p className="mt-3">
                  So, if you want to write some kind of stand-alone program or
                  server in Javascript, then you can use nodejs for it.
                </p>
              </p>
              <p className="sm:px-6 px-3 sm:text-base text-sm py-8">
                <strong className="underline primary-color font-bold">
                  Reasons for using node MongoDB:
                </strong>
                MongoDB is a document-oriented NoSQL database used for high
                volume data storage. MongoDB is a database that came into light
                around the mid-2000s. It comes under the category of a NoSQL
                database. If your application needs the ability to persistently
                store data in a way that you can efficiently query or update it
                later, then you would typically use some form of database. There
                are dozens of popular databases. MongoDB is one such database.
                MariaDB, MySql, CouchDB, DynamoDB (on AWS), Postgres are
                examples of other databases. <br />
                <strong className="text-stone-600 mt-4">
                  Here are the some main reasons for using MongoDB:
                </strong>
                <li>
                  MongoDB is very flexible and adaptable to real business world
                  situations and requirements.
                </li>
                <li>
                  Queries can be made to return certain fields within documents.
                </li>
                <li>
                  MongoDB supports field, range-based query, regular expression,
                  etc. for searching the data from the stored data.
                </li>
                <li>
                  The dynamic database schema used in MongoDB is called the
                  JSON.
                </li>
                <li>
                  MongoDB basically uses JavaScript objects in place of the
                  procedure.
                </li>
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem className="box-shadow border-b rounded duration-500">
            <AccordionItemHeading className="  py-6 sm:px-3 px-0 rounded">
              <AccordionItemButton className="sm:text-2xl text-xl font-bold text-blue-400 flex items-center">
                <AiFillQuestionCircle className="mr-2 sm:text-2xl text-4xl flex items-start"></AiFillQuestionCircle>
                What is The Different Between SQL And NoSQL?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="border-y ">
              <p className="sm:px-6 px-3 sm:text-base text-sm pt-3 border-t">
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
                Durability). Great support is available for all SQL database
                from their vendors. Also a lot of independent consultations are
                there who can help you with SQL database for a very large scale
                deployments.
              </p>
              <p className="sm:px-6 px-3 sm:text-base text-sm py-8">
                <strong className="underline primary-color font-bold">
                  NoSQL:
                </strong>
                NoSQL database are primarily called as non-relational or
                distributed database. A NoSQL database has dynamic schema for
                unstructured data. Data is stored in many ways which means it
                can be document-oriented, column-oriented, graph-based or
                organized as a KeyValue store. NoSQL databases are horizontally
                scalable. NoSQL databases are either key-value pairs,
                document-based, graph databases or wide-column stores. The NoSQL
                database follows the Brewers CAP theorem (Consistency,
                Availability and Partition tolerance). NoSQL database you still
                have to rely on community support and only limited outside
                experts are available for setting up and deploying your large
                scale NoSQL deployments.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem className="box-shadow border-b rounded duration-500">
            <AccordionItemHeading className=" py-6 sm:px-3 px-0 rounded">
              <AccordionItemButton className="sm:text-2xl text-xl font-bold text-blue-400 flex items-center">
                <AiFillQuestionCircle className="mr-2 sm:text-2xl text-4xl flex items-start"></AiFillQuestionCircle>
                What is The Purpose of JWT? How dose Work JWT?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className="sm:px-6 px-3 sm:text-base text-sm pt-3 border-t">
                <strong className="underline primary-color font-bold text-justify">
                  JWT:
                </strong>
                JSON Web Token (JWT) is an open standard (RFC 7519) that defines
                a compact and self-contained way for securely transmitting
                information between parties as a JSON object. This information
                can be verified and trusted because it is digitally signed. JWTs
                can be signed using a secret (with the HMAC algorithm) or a
                public/private key pair using RSA or ECDSA. When tokens are
                signed using public/private key pairs, the signature also
                certifies that only the party holding the private key is the one
                that signed it.
              </p>
              <p className="sm:px-6 px-3 sm:text-base text-sm py-8">
                <strong className="underline primary-color font-bold">
                  Jwt Work:
                </strong>
                JWTs differ from other web tokens in that they contain a set of
                claims. Claims are used to transmit information between two
                parties. A JWT is a string made up of three parts, separated by
                dots (.), and serialized using base64. In the most common
                serialization format, compact serialization, the JWT looks
                something like this: xxxxx.yyyyy.zzzzz. Once decoded, you will
                get two JSON strings: The header, The payload And The signature.
                The JOSE (JSON Object Signing and Encryption) header contains
                the type of token JWT in this case and the signing algorithm.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </Zoom>
  );
};

export default Blogs;

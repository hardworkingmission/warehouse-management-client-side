import React from 'react';

const Blogs = () => {
    return (
        <div className='w-5/6 mx-auto'>
            <div className='p-2 my-2'>
                <div className="question">
                  <h1 className='font-bold lg:text-xl md:text-lg'>Q1.Difference between `javascript` and `nodejs`.</h1>
                </div>
                <div className="answer">
                    <div className="flex flex-col">
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                <table className="min-w-full">
                                <thead className="border-b">
                                    <tr>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        #
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left font-bold">
                                        JavaScript
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left font-bold">
                                       NodeJs
                                    </th>
                                    
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        Javascript is programming language
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        Nodejs is a Javascript runtime environment that allows javascript to be run on server.
                                    </td>
                                    </tr>
                                    <tr className="bg-white border-b">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        It runs on browswer with javascript engine in clint side
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-wrap">
                                       It runs Javascript code in server side with Chrome V8 engine.
                                    </td>
                                    </tr>
                                    <tr className="bg-white border-b">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            Newest version of javascript runs on chrome v8 engine is written by C++
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            It is written by C,C++
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">4</td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-wrap">
                                            Javascript frameworks-TypedJS,RamdaJS etc.
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-wrap">
                                            NodeJS framewoks- expressJS Lodash
                                        </td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-2">
                <div className="question">
                  <h1 className='font-bold lg:text-xl md:text-lg'>Q2.When should you use `nodejs` and when should you use `mongodb`?</h1>
                </div>
                <div className="answer">
                    <h3 className='underline font-bold'>Reasons of using Nodejs:</h3>
                    <p>Javascript is a lightweight fast interpreted programming language.It runs on Nodejs in server.Nodejs is single-threaded event-driven system,it is fast when handling lots of requests compared to multi-threaded system.It has large number of pre-build modules and develper community which helps a developer to buid a application easy and fast.It is good for I/O intensive task.</p>
                    <h3 className='underline font-bold'>Reasons of using Mongodb:</h3>
                    <p>MongoDB is a document based,NoSQL database management system.In mongodb data are stored JSON-like object format.The data objects are stored as separate documents inside a collection.The motivation of the MongoDB language is to implement a data store that provides high performance, high availability, and automatic scaling.Some reasons are given bellow for choosing mondodab- </p>
                    <ul className='mt-2 ml-2' style={{listStyle:'disc'}}>
                        <li>Document oriented</li>
                        <li>High performance</li>
                        <li>High availability</li>
                        <li>High scalability</li>
                        <li>Dynamic</li>
                    </ul>
                   
                </div>

            </div>
            <div className="p-2">
                <div className="question">
                  <h1 className='font-bold lg:text-xl md:text-lg'>Q3.Differences between `sql` and `nosql` databases.</h1>
                </div>
                <div className="answer">
                    <div className="flex flex-col">
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                <table className="min-w-full">
                                <thead className="border-b">
                                    <tr>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        #
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left font-bold">
                                        SQL
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left font-bold">
                                       NoSQL
                                    </th>
                                    
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        It follows RDMS(Relationsl Database Management System).
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                       It follows Non-relational databse system.
                                    </td>
                                    </tr>
                                    <tr className="bg-white border-b">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        SQL databases have predefined schema.
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-wrap">
                                       NoSQL databses have dynamic schema.
                                    </td>
                                    </tr>
                                    <tr className="bg-white border-b">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            SQL databases are table-based.Data are displayed in table form
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            NoSQL databases are collection based.Data are displayed as key-value pair
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">4</td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-wrap">
                                            SQL databases use structured query language to perform operations(define and manipulation)
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-wrap">
                                            NoSQL databases use unstructured query language to perform operations(define and manipulation)
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">5</td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-wrap">
                                            SQL databases are good for complex query.
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-wrap">
                                            NoSQL databases are not good for complex query compared to SQL databases.
                                        </td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-2">
                <div className="question">
                  <h1 className='font-bold lg:text-xl md:text-lg'>Q4.What is the purpose of `jwt` and how does it work?</h1>
                </div>
                <div className="answer">
                    <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
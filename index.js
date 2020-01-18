// const Suite = require("./bench")

// const Graph = require("struk.graph")
// const ngraph = require("ngraph.graph")

// let NODE_COUNT = 100

// let suite = new Suite()
//     // .add("ngraph.graph", (test) => {
//     //     let graph = ngraph({})

//     //     test(() => {
//     //         for (let i = 0; i< NODE_COUNT; i++) {
//     //             graph.addNode(i)
//     //         }
//     //     })
//     // })
//     .add("struk.graph", (test) => {
//         let graph = new Graph({trackNodes: true})

//         test(() => {
//             for (let i = 0; i< NODE_COUNT; i++) {
//                 graph.addNode(i)
//             }
//         })
//     })

//     // .add("wait", (test) => {
//     //     test(() => {
//     //         return new Promise(resolve => {
//     //             setTimeout(() => {
//     //                 resolve('resolved')
//     //             }, 200)
//     //         })
//     //     })
//     // })

//     .run()
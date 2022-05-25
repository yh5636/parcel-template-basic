//node.js환경에서 동작
//ESM:import, export 사용X 
//--> Common.js : require(), modul.export{} 사용O

// import autoprefixer
// const autoprefixer = require('autoprefixer')

// export
// module.exports = {
//     plugin: [
//         autoprefixer
//     ]
// }

//간소화
module.exports = {
    plugin: [
        require('autoprefixer')
    ]
}
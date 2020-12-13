// import React, { Component, Fragment } from "react"
// import { connect } from "react-redux"
// import PropTypes from "prop-types"
// import {
//   getTransanctionList,
//   deleteTransanction,
// } from "../../../store/actions/Transanction/transanctions"
// export class TransanctionSetting extends Component {
//   static propTypes = {
//     transanctions: PropTypes.array.isRequired,
//     getTransanctionList: PropTypes.func.isRequired,
//     deleteTransanction: PropTypes.func.isRequired,
//   }

//   componentDidMount() {
//     this.props.getTransanctionList()
//   }

//   render() {
//     return (
//       <Fragment>
//         <div className='container'>
//           <h2>Transanctions</h2>
//           <table
//             className='table table-striped align-middl'
//             style={{ textAlign: "center" }}>
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Name</th>
//                 <th>Price</th>
//                 <th>Stock</th>
//                 <th>Description</th>
//               </tr>
//             </thead>
//             <tbody>
//               {this.props.transanctions.map((transanction) => (
//                 <tr key={transanction.id}>
//                   <td className='align-middle'>{transanction.id}</td>
//                   <td className='align-middle'>{transanction.name}</td>
//                   <td className='align-middle'>{transanction.price}</td>
//                   <td className='align-middle'>{transanction.stock}</td>
//                   <td className='align-middle'>{transanction.description}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </Fragment>
//     )
//   }
// }

// const mapStateToProps = (state) => ({
//   transanctions: state.transanctions.transanctions,
// })

// export default connect(mapStateToProps, {
//   getTransanctionList,
//   deleteTransanction,
// })(TransanctionSetting)

import { connect } from 'react-redux'
import Initialization from './Initialization'
import { initialization } from '../../store/actions/initialization'

const mapDispatchToProps = {
  initialization
}

export default connect(null, mapDispatchToProps)(Initialization)

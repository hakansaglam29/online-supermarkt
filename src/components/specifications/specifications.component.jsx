import { ReactComponent as FlexPayments } from '../../assets/icons/flexible_payments.svg';
import { ReactComponent as FastTransport } from '../../assets/icons/fast_transport.svg';
import { ReactComponent as Box } from '../../assets/icons/box.svg';
import './specifications.styles.scss'

const SpecificationsComponents = () => {
    return (
        <div className='specifications-wrapper'>
            <div className='specification' >
                <FlexPayments className='logo' />
                <h4>Flexible Payment Options</h4>
            </div>
            <div className='specification' >
                <FastTransport className='logo' />
                <h4>Flexible Delivery Options</h4>
            </div>
            <div className='specification' >
                <Box className='logo' />
                <h4>Carefully Selected Products</h4>
            </div>
        </div>
    )
}

export default SpecificationsComponents;
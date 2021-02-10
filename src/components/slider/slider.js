import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import Online_1 from '../../photos/supermarket-online-1.jpg';
import Online_2 from '../../photos/supermarket-online-2.jpg';
import Online_3 from '../../photos/supermarket-online-3.jpg';
import Online_4 from '../../photos/supermarket-online-4.jpg';
import './slider.scss';



function Slider() {

    const AutoplaySlider = withAutoplay(AwesomeSlider);

    return (
            <AutoplaySlider
                play={true}
                cancelOnInteraction={false} // should stop playing on user interaction
                interval={6000}
                className='awesome'
            >
                <div data-src={Online_1} />
                <div data-src={Online_2} />
                <div data-src={Online_3} />
                <div data-src={Online_4} />
            </AutoplaySlider>
    )
}
export default Slider;
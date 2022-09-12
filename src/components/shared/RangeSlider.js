import React, { useState, useContext } from 'react';
import { Range, getTrackBackground } from 'react-range';

//context
import { FilterProductsContext } from '../../context/FilterProductsContextProvider';


const STEP = 1;
const MIN = 0;
const MAX = 1000;

const RangeSlider = ({ }) => {
    const { setValueRange } = useContext(FilterProductsContext)
    const [values, setValues] = useState([0, 1000]);

    const handleSetRange = (values) => {
        setValues(values);
        setValueRange(values);
    }
    return (
        <>
            <div className='d-flex justify-content-center flex-wrap mt-5'>
                <Range
                    values={values}
                    step={STEP}
                    min={MIN}
                    max={MAX}

                    onChange={(values) => handleSetRange(values)}
                    renderTrack={({ props, children }) => (
                        <div
                            onMouseDown={props.onMouseDown}
                            onTouchStart={props.onTouchStart}
                            style={{
                                ...props.style,
                                height: '36px',
                                display: 'flex',
                                width: '100%'
                            }}
                        >
                            <div
                                ref={props.ref}
                                style={{
                                    height: '4px',
                                    width: '100%',
                                    borderRadius: '4px',
                                    background: getTrackBackground({
                                        values,
                                        colors: ['#EAECEF', '#151515', '#EAECEF'],
                                        min: MIN,
                                        max: MAX,

                                    }),
                                    alignSelf: 'center'
                                }}
                            >
                                {children}
                            </div>
                        </div>
                    )}
                    renderThumb={({ index, props }) => (
                        <div
                            {...props}
                            style={{
                                ...props.style,
                                height: '15px',
                                width: '15px',
                                borderRadius: '50%',
                                backgroundColor: '#FFFFFF',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                boxShadow: '0px 2px 6px #AAA',
                                border: '1px solid #151515'
                            }}
                        >
                            <div
                                style={{
                                    position: 'absolute',
                                    top: '-30px',
                                    color: '#fff',
                                    fontSize: '10px',
                                    fontFamily: "Jost, sans-serif",
                                    padding: '4px',
                                    borderRadius: '2px',
                                    backgroundColor: '#151515',

                                }}
                            >
                                {`$${values[index]}`}
                            </div>
                        </div>
                    )}
                />
            </div>
        </>
    );
};

export default RangeSlider;
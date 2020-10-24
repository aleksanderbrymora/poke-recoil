import { Box, Radio, RadioGroup } from '@chakra-ui/core';
import React, { ChangeEvent } from 'react';
import { useRecoilState } from 'recoil';
import { options, shippingState } from '../atoms/shipping';

const Shipping = () => {
	const [shipping, setShipping] = useRecoilState(shippingState);

	const changeShipping = (e: ChangeEvent<HTMLInputElement>) => {
		const newShipping = options.find((o) => o.name === e.target.value);
		if (newShipping) {
			setShipping(newShipping);
		}
	};

	return (
		<Box mt='2rem'>
			<RadioGroup value={shipping.name} onChange={changeShipping}>
				{options.map((o) => (
					<Radio color='gray' value={o.name}>
						{o.name} - ${o.price}
					</Radio>
				))}
			</RadioGroup>
		</Box>
	);
};

export default Shipping;

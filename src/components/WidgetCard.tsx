import { FC, ReactElement, ReactNode } from 'react';
import { Button } from 'asma-antrd';
import { observer } from 'mobx-react-lite';

interface IWidgetCardProps {
	icon: ReactElement;
	titleWidget: string;
	titleButton: string;
	titleEmpty?: string;
	children?: ReactNode;
}

const WidgetCard: FC<IWidgetCardProps> = ({
	icon,
	titleWidget,
	titleButton,
	titleEmpty,
	children,
}) => {
	return (
		<div
			className={
				'overflow-hidden flex flex-col gap-2 rounded-lg bg-white px-4 py-2 sm:px-8 sm:py-5 shadow-cardbox'
			}
		>
			<div className='flex items-center justify-between'>
				<div className='flex items-center'>
					{icon}
					<span
						className={'pl-2 sm:pl-4 text-lg sm:text-xl leading-6 text-black sm:text-custom-green'}
					>
						{titleWidget}
					</span>
				</div>
				<div className='flex gap-3 shadow-md transition-opacity hidden lg:block'>
					<Button
						btnType='secondary'
						size='small'
						className='px-2 py-0.5 text-base sm:px-3 sm:py-1 rounded-md border border-solid border-custom-green text-black sm:text-custom-green hover:bg-custom-green hover:text-white transition-all'
						onClick={() => console.log('click Button')}
					>
						{titleButton}
					</Button>
				</div>
			</div>
			{!children ? (
				<div className='flex items-center justify-center text-lg sm:text-xl leading-6 text-black py-2 sm:py-5'>
					{titleEmpty}
				</div>
			) : (
				<div>{children}</div>
			)}

			<button
				className={
					'm-auto mt-4 justify-self-center text-custom-dark text-sm text-custom-green hover:cursor-pointer hover:text-teal-400'
				}
				onClick={() => console.log('see all')}
			>
				Se alle
			</button>
		</div>
	);
};

export default observer(WidgetCard);

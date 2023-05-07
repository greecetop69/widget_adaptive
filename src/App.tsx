import { useEffect } from 'react';

import { observer } from 'mobx-react-lite';
import { useRootStore } from './mst/store/RootStore';

import { Icon } from '@iconify/react';
import WidgetCard from './components/WidgetCard';
import WidgetTable from './components/WidgetTable';

function App() {
	const { fetchProducts } = useRootStore();

	useEffect(() => {
		fetchProducts();
	}, []);

	return (
		<div className='bg-custom-gray h-full flex justify-between'>
			<div className='hidden lg:block w-56 bg-custom-green'></div>
			<div className='w-full px-6 flex flex-col'>
				<div className='h-20 mb-5'></div>
				<div className='h-20 mb-5 bg-teal-100'></div>
				<div className='h-80 mb-5 bg-blue-500'></div>
				<div className='flex flex-col md:flex-row '>
					<div className='w-full mr-5 mb-5'>
						<WidgetCard
							icon={<Icon width={24} height={24} icon='fluent:clipboard-task-list-ltr-24-filled' />}
							titleWidget={'Oppgaver'}
							titleButton={'Opprett ny oppgave'}
							titleEmpty={'No Tasks'}
						>
							<div>
								<WidgetTable />
							</div>
						</WidgetCard>
					</div>
					<div className='w-full h-80 bg-purple-500'></div>
				</div>
				<div>-------------------------------------------</div>
			</div>
		</div>
	);
}

export default observer(App);

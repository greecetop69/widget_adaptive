import React, {FC, ReactElement, ReactNode} from 'react';
import {useRootStore} from "../mst/store/RootStore";
import {observer} from "mobx-react-lite";
import {Icon} from "@iconify/react";
import {Popover} from "antd";
import {isMobile} from 'react-device-detect';

interface IWidgetTableProps {

}

const WidgetTable: FC<IWidgetTableProps> = () => {
    const {removeTodoById, topTasks} = useRootStore();

    const handlerDeleteProduct = (id: number) => {
        removeTodoById(id);
    };


    const content = (
        <div>
            <p className="cursor-pointer" onClick={() => console.log(123)}>Open</p>

        </div>
    );
    return (
        <div className="pt-5 font-SansPro">
            <div
                className="flex text-xs  leading-4 font-semibold text-custom-grey border-solid border-b-2 border-custom-gray hidden sm:flex">
                <div className="w-7 pr-16">FIRST</div>
                <div>OPPGAVE</div>
            </div>

            {topTasks.map((item) => (
                <div key={item.id}
                     className='flex items-center py-1.5 text-sm font-normal text-custom-dark border-solid border-b-2 border-custom-gray'>

                        <div className='whitespace-nowrap p-1 hidden md:block'>
                            {item.date}
                        </div>
                        <div className='p-1 hidden md:block'>
                            {item.time}
                        </div>
                        <div className='p-1 w-full text-gray-700 font-SansPro'>
                            {item.title}

                            <div className='pt-1 text-sm text-gray-500 flex block md:hidden'>
                                <div >
                                    {item.date}
                                </div> <div>
                                {item.time}
                            </div>
                            </div>
                        </div>



                    <div className=''>
                        <Popover content={
                            <p className="cursor-pointer" onClick={() => handlerDeleteProduct(item.id)}>Remove</p>
                        } trigger="click">
                            <Icon width={24} height={24} icon="mdi:dots-vertical"/>
                        </Popover>
                    </div>

                </div>
            ))}
        </div>

    );
};

export default observer(WidgetTable);

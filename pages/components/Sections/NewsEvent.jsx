import React from 'react';
import CardText from '../ui/cardText';
import CardImage from '../ui/cardImage';

const NewsEvent = () => {
    return (
        <div className='bg-[#333333] px-[5.625rem] py-10'>
            <h1 className='text-white font-bold text-3xl pb-5'>News and events for students</h1>
            <div className='grid grid-cols-3 gap-x-5'>
                <div className='flex flex-col gap-y-5'>
                    <div>
                        <CardText
                            title={"Newsticker: Information on the coronavirus"}
                            para="Article | 11/10/22"
                        />
                    </div>
                    <div>
                        <CardImage
                            size={"w-full rounded-none"}
                            image={"https://www.usus.uni-stuttgart.de/img/2022/stressed-student.jpg?__scale=w:560,h:400,cx:67,cy:0,cw:1866,ch:1333"}
                            text={"Everyone feels sometimes stressed during their studies. But what can you do against it? Constanza has a few tips."}
                            para={"USUS blog | 1/4/23"}
                        />
                    </div>
                    <div>
                        <CardImage
                            style={"pt-8"}
                            image={"https://www.simtech.uni-stuttgart.de/img/Sim_Tech_Folge_03_Szene_27.jpg?__scale=w:220,h:220,cx:262,cy:26,cw:1073,ch:1073"}
                            text={"Everyone feels sometimes stressed during their studies. But what can you do against it? Constanza has a few tips."}
                            para={"USUS blog | 1/4/23"}
                        />
                    </div>
                </div>
                <div className='flex flex-col gap-y-5'>
                    <div>
                        <CardImage
                            style={"pt-8"}
                            image={"https://www.simtech.uni-stuttgart.de/img/Sim_Tech_Folge_03_Szene_27.jpg?__scale=w:220,h:220,cx:262,cy:26,cw:1073,ch:1073"}
                            text={"Everyone feels sometimes stressed during their studies. But what can you do against it? Constanza has a few tips."}
                            para={"USUS blog | 1/4/23"}
                        />
                    </div>
                    <div>
                        <CardImage
                            style={"pt-8"}
                            image={"https://www.uni-stuttgart.de/universitaet/aktuelles/meldungen/img-news/instagram.jpg?__scale=w:220,h:220,cx:333,cy:0,cw:1333,ch:1333"}
                            text={"Everyone feels sometimes stressed during their studies. But what can you do against it? Constanza has a few tips."}
                            para={"USUS blog | 1/4/23"}
                        />
                    </div>
                    <div>
                        <CardImage
                            style={"pt-8"}
                            image={"https://www.uni-stuttgart.de/universitaet/aktuelles/meldungen/img-news/diversity-kalender.JPG?__scale=w:220,h:220,cx:170,cy:0,cw:832,ch:832"}
                            text={"Everyone feels sometimes stressed during their studies. But what can you do against it? Constanza has a few tips."}
                            para={"USUS blog | 1/4/23"}
                        />
                    </div>
                    <div className='flex justify-between gap-3'>
                        <button className='bg-none border-2 border-white py-4 px-6 text-white'>ALL NEWS</button>
                        <button className='bg-none border-2 border-white py-4 px-6 text-white'>ALL EVENTS</button>
                    </div>
                </div>
                <div className='flex flex-col gap-y-5'>
                    <div>
                        <CardImage
                            size={"w-full rounded-none"}
                            image={"https://www.uni-stuttgart.de/universitaet/aktuelles/video/img-video-vorschaubilder/24A_1280x720.jpg?__scale=w:560,h:400,cx:136,cy:0,cw:1008,ch:720"}
                            text={"Latest episode:`Intelligent systems will help us in crises and in the future`"}
                            para={"USUS blog | 1/4/23"}
                        />
                    </div>
                    <div>
                        <CardText
                            title={"Impressive research in the field of business administration"}
                            para="News 12/21/22"
                        />
                    </div>
                    <div>
                        <CardImage
                            style={"pt-8"}
                            image={"https://www.uni-stuttgart.de/universitaet/aktuelles/meldungen/img-news/photocase_4910444.jpg?__scale=w:220,h:220,cx:0,cy:871,cw:2000,ch:2000"}
                            text={"Energy savings in November"}
                            para={"Article | 12/15/22"}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewsEvent;
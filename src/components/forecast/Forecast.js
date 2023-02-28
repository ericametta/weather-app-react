import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading } from "react-accessible-accordion";
import "./Forecast.css";

const WEEK_DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const Forecast = ({ data }) => {
    const dayInWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(
        WEEK_DAYS.slice(WEEK_DAYS[0], dayInWeek)
        );

    console.log(forecastDays);
    console.log(dayInWeek);
    return (
        <>
            <label className="title">Daily</label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, idx) => (
                    <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="daily-item">
                                    <img className="icon-small"
                                        src={`icons/${item.weather[0].icon}.png`}
                                        alt="weather" />
                                    <label htmlFor=" " className="day">{forecastDays[idx]}</label>
                                    <label htmlFor=" " className="description">{item.weather[0].description}</label>
                                    <label htmlFor=" " className="min-max">{Math.round(item.main.temp_min)} °C / {Math.round(item.main.temp_max)} °C</label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                    </AccordionItem>
                ))}
            </Accordion>

        </>
    );
}

export default Forecast;
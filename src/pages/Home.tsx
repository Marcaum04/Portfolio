import { Logo, Nav } from 'components';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
)


export function Home(){
    const data = {
        labels: ['HTML', 'CSS', 'JavaScript', 'C#', 'Python', 'SQL', 'C'],
        datasets: [
            {
                data: [1,2,3,1,2,6,1],
                backgroundColor: 'aqua',
                borderColor: 'black',
                borderWidth: 1,
            }
        ]
    }

    const options ={
        indexAxis: 'y' as const,
        plugins: {
            legend: {
              display: false
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Linguagens',
                    color: 'white',
                    font: {
                        family: 'Arial',
                        size: 14,
                        weight: 'bold' as const,
                    }
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Experiência',
                    color: 'white',
                    font: {
                        family: 'Arial',
                        size: 14,
                        weight: 'bold' as const,
                    },
                }
            },
        }
}
    return(
        <div className="bg-fundo">
            <div className="w-80v mx-auto my-0 flex flex-col">
                <div className="flex justify-evenly py-5v">
                    <div className="flex justify-between flex-col w-35v">
                        <h1 className="text-white text-5v">Marcos Vinícius</h1>
                        <h2 className="text-white pb-1-5v text-2v">| marcaumdev • programador</h2>
                        <p className="text-white text-justify text-1v">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur augue leo, tincidunt quis mattis in, porttitor at odio. Sed cursus nisi elit, in sollicitudin justo pulvinar sit amet. Ut pellentesque nisl a odio scelerisque placerat. In sagittis commodo est nec finibus. Aliquam erat volutpat. </p>
                    </div>
                    <div>
                        <Logo aparelho="desktop"/>
                    </div>
                </div>
                <Nav />
                <Bar className="p-1v text-white text-2v" data={data} options={options}></Bar>;
            </div>
        </div>
    );
}
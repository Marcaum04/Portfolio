import { Logo, Nav } from 'components';

export function Home(){
    return(
        <div className="bg-fundo">
            <div className="w-80v mx-auto my-0 flex flex-col">
                <div className="flex justify-evenly py-5v">
                    <div className="flex justify-evenly flex-col w-30v">
                        <h1 className="text-white text-6xl">Marcos Vinícius</h1>
                        <h2 className="text-white text-3xl">| marcaumdev • programador</h2>
                        <p className="text-white text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur augue leo, tincidunt quis mattis in, porttitor at odio. Sed cursus nisi elit, in sollicitudin justo pulvinar sit amet. Ut pellentesque nisl a odio scelerisque placerat. In sagittis commodo est nec finibus. Aliquam erat volutpat. </p>
                    </div>
                    <div>
                        <Logo aparelho="desktop"/>
                    </div>
                </div>
                <Nav />
            </div>
        </div>
    );
}
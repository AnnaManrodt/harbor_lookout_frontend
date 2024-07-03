import CustomComponent from "../componets/AboutSection"

export default function AboutPage() {

    return (
        <>
            <main>
                <h1>Harbor Lookout</h1>
                <h6>V 2.0</h6>
                <img src="./assets/rba_logo.png" alt="Donated to LSMMA by Rba" />
            </main>
            <section>
                <CustomComponent
                    title="The Original Bridge: Gondola Ferry"
                    paragraph="Architected by city engineer Thomas McGilvray, the bridge was first constructed as a transporter bridge, or gondola ferry, between 1901 and 1905. The design was inspired by a similar bridge in France. It was built for locals who lived on Minnesota Point (Park Point) because ferries could not traverse the frozen canal during the winter. The gondola could carry 350 people plus vehicles at a maximum of 60 short tons on a trip across the canal that took about a minute."
                    imageUrl="image1.jpg"
                />
                <CustomComponent
                    title="The New Bridge: Aerial Lift"
                    paragraph="The bridge was modified in 1929 to resemble the aerial lift bridge as it stands today. An elevating two-lane roadway replaced the gondola ferry. The top span of the bridge was raised to 135 feet (41 m), ensuring that it could accommodate tall ships. On March 29, 1930 the first vessel to pass under the newly renovated lift bridge was a tug"
                    imageUrl="image2.jpg"
                />
                <CustomComponent
                    title="Bridge Facts"
                    paragraph="The Aerial Lift Bridge not only serves as an historic landmark, but continues to provide a vital function for cargo ships to enter the ports of Duluth and Superior. The bridge spans 390 feet (119 meters) across the canal and allows for a clearance of 135 feet (41 meters). When the bridge deck (lower span) is down, clearance is 15 feet (4.6 meters). The bridge raises an average of 5,000 times per year. That’s more than a dozen times per day! The bridge has two Westinghouse Airbrake horns that it uses to exchange greetings with ships entering and exiting the harbor."
                    imageUrl="image2.jpg"
                />
                <CustomComponent
                    title="How the Bridge Work"
                    paragraph="Many bridges are built to remain high enough above the water not to interfere with ship traffic; lower bridges require functionality to allow ships to pass. More common are bascule bridges (drawbridges) like the Tower Bridge in London, and less common are lift bridges, such as the Duluth Aerial Lift Bridge. The bridge functions with a system of pulleys and counterweights. Each concrete counterweight weighs 450 tons. It is electrically powered. In an operator house on the lower span of the bridge, an operator controls the movement of the bridge. When a ship comes within 1.5 miles (2.4 km) it signals the operator to begin lifting the bridge"
                    imageUrl="image2.jpg"
                />
                <CustomComponent
                    title="Ship Terminology"
                    paragraph="Knowing some terminology is helpful when reading a ship’s information. A “call sign” is a unique ID that belongs to a vessel; marine radio stations use them for ship communication. The “draft” (a.k.a. draught) of a ship is the minimum depth of water that it can safely travel through. Ship speed is measured in “knots” where 1 knot equals 1.15 mph (1.85 km/h). “Heading” is the direction that the ship points. It is measured in degrees with 0 as north."
                    imageUrl="image2.jpg"
                />
                <CustomComponent
                    title="Ship Statistic"
                    paragraph="The longest vessels on Lake Superior are 1000 feet (300 meters) in length. Some can carry over 78,000 long tons (174,720,000 pounds) of cargo, however, the weight of cargo that a ship will carry depends on water level of the lake in ports and channels. The fastest lake freighter, the Edwin H. Gott, can reach speeds up to 16.7 mph (27 km/h). The largest lake freighter, the Paul R. Tregurtha, measures 1013.5 feet (309.8 meters) in length."
                    imageUrl="image2.jpg"
                />
                <CustomComponent
                    title="Duluth City History"
                    paragraph="The Ojibwe lived on the shores surrounding Lake Superior for hundreds of years, including the Duluth area. Fur trading brought European settlers to Duluth. Eventually the Ojibwe people relocated to the Fond du Lac Indian Reservation as a result of a treaty; this reservation lies up the Saint Louis River from Duluth near the city of Cloquet. Duluth was founded on industry but after industrial companies closed their Duluth plants in the 1970s, the city fell on tough times. Tourism has since revitalized the city and industry still plays a part in Duluth’s economy today. Duluth is the biggest inland harbor in the world even though it is 2,342 miles from the Atlantic Ocean."
                    imageUrl="image2.jpg"
                />
                <CustomComponent
                    title="Cargo Statistics"
                    paragraph="Duluth moves about 38 million short tons of cargo every year. Outbound iron ore and coal represent approximately 80 percent of this in equal proportion. Outbound grain accounts for 5-10 percent of the tonnage while inbound limestone, salt, and cement makes up another 10 percent. Many of the nation’s steel mills depend on ore from the"
                    imageUrl="image2.jpg"
                />
                <CustomComponent
                    title="Marine Museum"
                    paragraph="The Lake Superior Marine Museum & Maritime Visitor Center is located next to the North pier of the canal. Admission is free. The center provides narration on a loudspeaker for tourists outside, describing history or facts about the particular ship coming into or leaving the harbor."
                    imageUrl="image2.jpg"
                />
                <CustomComponent
                    title="Duluth Seaway Port Authority"
                    paragraph="The Duluth Seaway Port Authority is an independent public agency created by the Minnesota Legislature in 1955 to foster regional maritime commerce, promote trade development, facilitate industrial development and serve as an advocate for port interests in the region and around the world. The Port Authority also owns and manages multiple waterfront properties, including the Clure Public Marine Terminal and its 26-acre expansion, which together comprise the port’s general cargo hub known as"
                    imageUrl="image2.jpg"
                />
            </section>
        </>

    )
}
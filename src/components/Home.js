import { useState } from "react";
import { Grid } from "semantic-ui-react";
import BirderList from "./BirderList";
import SightingList from "./SightingList";

function Home(props) {
  const [activeBirder, setActiveBirder] = useState(null);

  return (
    <Grid>
      <Grid.Column width={4}>
        <BirderList onSelectBirder={setActiveBirder} />
      </Grid.Column>
      <Grid.Column width={12}>
        {activeBirder ? <SightingList activeBirder={activeBirder} /> : null}
      </Grid.Column>
    </Grid>
  );
}

export default Home;

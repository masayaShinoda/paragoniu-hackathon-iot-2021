const token = "36beb28052fa27ba685e891e385a4b";
const [lights, setLights] = useState((lights) => {return false}); // by default lights are off

const SiteClient = require("datocms-client").SiteClient;
const client = new SiteClient(token);
const itemId = "21519068";

useEffect(() => {
    fetch(
        'https://graphql.datocms.com/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify({
            query: `{ 
                allLights {
                  boolean
                }
              }`
          }),
        } 
    )
    .then(res => res.json())
    .then((res) => {
        console.log(res.data["allLights"][0]["boolean"])
        setLights(res.data["allLights"][0]["boolean"])
    })
    .catch((error) => {
        console.log(error);
    });
}, [])

return (
    {
        lights ? <img id="house" src="/lights-on.png" alt=""/> : <img id="house" src="/lights-off.png" alt=""/>
      }
      <div className="switch-container">
        <input type="checkbox" id="light-switch"/>
        <label onClick={() => {
          setLights(!lights)
          client.items
          .update(itemId, {
            boolean: !lights,
          })
          .then((item) => {
            console.log(item);
          })
          .catch((error) => {
            console.error(error);
          });
          
        }}
        for="light-switch" id="light-switch-label">
          <div className="screw"></div>
          <div className="switch"></div>
          <div className="screw"></div>
        </label>
        <div id="background"></div>

      </div>
)
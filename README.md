# Menu

#!!!Add tests!!!

# Intention
Decide, among colleagues, to which restaurant to go.

## Design
- ###Parser modules
    - Each module has to return data structured according to following example:
    ```js
        {
            // mandatory fields
            name: 'Meat market',
            // optional
            nick: 'Presto',
            coordinates: {
                lat: 50.0914499,
                lon: 14.4449515
            },
            acceptsCards: true,
            menu: {
                date: '1466207165'
                items: [{
                    // mandatory fields
                    price: 35,
                    currency: CZK, // currency is implicitly set to CZK
                    name: 'Houbový krém',
                    // optional
                    course: 'soup',
                    description: '',
                    amount: '',
                    unit: ''
                }]
            }
        }
    ```
    
        - `nick` can be changed by the application
        
- ###Backend
    - ####Endpoints
        - **Restaurant listing** `GET /restaurants`
            - **Responses**
                - `400` No restaurants available
- ###Frontend
    - ####Pages
        - #####Homepage `/`
            - **Structure**
                - Cards
                    - Name of the restaurant will be shortened after ?30 characters
                    - Menu will expand on demand
            - **Payload for page**
                ````js
                [{
                    meta: {
                        date: '1466207165',
                        voters: {
                            'Pohy',
                            'xduseko'
                        }
                    },
                    restaurant: ...
                }]
                ````
        - #####Login `/login`
            - **Authentication**
                - local accounts aren't necessary
                - Services ([OAuth](https://github.com/lynndylanhurley/redux-auth)):
                    - GitHub
                    - Facebook
                    - Google
- ###Future ideas
    - Currency set by language
    - Use react-redux-router
    - Use redux-sagas
    - Use redux-reselect
    
- ###Big agenda
    - Be [progressive](https://developers.google.com/web/progressive-web-apps/)
    
######Built on [react-skeleton](https://github.com/pohy/react-skeleton)

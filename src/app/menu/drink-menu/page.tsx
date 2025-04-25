import React from 'react';

export const metadata = {
  title: 'Drink Menu | Landshark Sports Bar',
  description: 'Explore our extensive drink menu featuring craft cocktails, beers, shots, and our famous Shark Bowls',
};

export default function DrinkMenuPage() {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8 text-center">Drink Menu</h1>
          
          {/* Hero Banner */}
          <div className="relative h-64 rounded-lg overflow-hidden mb-12 bg-gradient-to-r from-blue-900 to-blue-700">
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white text-xl md:text-2xl font-medium text-center px-6">
                From craft cocktails to local brews and our famous Shark Bowls, <br />
                we've got your thirst covered.
              </p>
            </div>
          </div>
          
          {/* Shark Bowls Section */}
          <section className="mb-16">
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Shark Bowls</h2>
              <p className="text-blue-800 italic mb-4">
                Our signature cocktails - perfect for sharing with friends! Served in 32oz souvenir bowl.
              </p>
              
              <div className="grid gap-6 md:grid-cols-2">
                <div className="bg-white p-4 rounded shadow-sm">
                  <h3 className="text-xl font-bold text-blue-900">Blue Shark</h3>
                  <p className="text-gray-600 mb-2">
                    Vodka, blue curacao, lemonade, and a splash of Sprite
                  </p>
                  <p className="text-blue-900 font-semibold">$18</p>
                </div>
                
                <div className="bg-white p-4 rounded shadow-sm">
                  <h3 className="text-xl font-bold text-blue-900">Tiger Shark</h3>
                  <p className="text-gray-600 mb-2">
                    Rum, pineapple juice, orange juice, and grenadine
                  </p>
                  <p className="text-blue-900 font-semibold">$18</p>
                </div>
                
                <div className="bg-white p-4 rounded shadow-sm">
                  <h3 className="text-xl font-bold text-blue-900">Great White</h3>
                  <p className="text-gray-600 mb-2">
                    Tequila, triple sec, lime juice, and margarita mix
                  </p>
                  <p className="text-blue-900 font-semibold">$20</p>
                </div>
                
                <div className="bg-white p-4 rounded shadow-sm">
                  <h3 className="text-xl font-bold text-blue-900">Hammerhead</h3>
                  <p className="text-gray-600 mb-2">
                    Coconut rum, spiced rum, amaretto, and our tropical juice blend
                  </p>
                  <p className="text-blue-900 font-semibold">$20</p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Signature Cocktails Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Signature Cocktails</h2>
            
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white p-4 rounded shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-blue-900">Miami Vice</h3>
                <p className="text-gray-600 mb-2">
                  Half piña colada, half strawberry daiquiri - the best of both worlds
                </p>
                <p className="text-blue-900 font-semibold">$12</p>
              </div>
              
              <div className="bg-white p-4 rounded shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-blue-900">Touchdown Tea</h3>
                <p className="text-gray-600 mb-2">
                  Our take on Long Island Iced Tea with a citrus twist
                </p>
                <p className="text-blue-900 font-semibold">$14</p>
              </div>
              
              <div className="bg-white p-4 rounded shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-blue-900">Slam Dunk Mojito</h3>
                <p className="text-gray-600 mb-2">
                  Classic mojito with fresh mint, lime, and a splash of soda
                </p>
                <p className="text-blue-900 font-semibold">$11</p>
              </div>
              
              <div className="bg-white p-4 rounded shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-blue-900">Game Day Margarita</h3>
                <p className="text-gray-600 mb-2">
                  Premium tequila, fresh lime juice, and triple sec
                </p>
                <p className="text-blue-900 font-semibold">$12</p>
              </div>
            </div>
          </section>
          
          {/* Beers Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Beers</h2>
            
            <div className="bg-yellow-50 p-6 rounded-lg mb-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Draft Beers</h3>
              
              <div className="grid gap-4 md:grid-cols-2">
                <div className="bg-white p-3 rounded shadow-sm">
                  <h4 className="text-lg font-bold text-blue-900">Bud Light</h4>
                  <p className="text-blue-900 font-semibold">$6</p>
                </div>
                
                <div className="bg-white p-3 rounded shadow-sm">
                  <h4 className="text-lg font-bold text-blue-900">Miller Lite</h4>
                  <p className="text-blue-900 font-semibold">$6</p>
                </div>
                
                <div className="bg-white p-3 rounded shadow-sm">
                  <h4 className="text-lg font-bold text-blue-900">Blue Moon</h4>
                  <p className="text-blue-900 font-semibold">$7</p>
                </div>
                
                <div className="bg-white p-3 rounded shadow-sm">
                  <h4 className="text-lg font-bold text-blue-900">Sam Adams</h4>
                  <p className="text-blue-900 font-semibold">$7</p>
                </div>
                
                <div className="bg-white p-3 rounded shadow-sm">
                  <h4 className="text-lg font-bold text-blue-900">Stella Artois</h4>
                  <p className="text-blue-900 font-semibold">$8</p>
                </div>
                
                <div className="bg-white p-3 rounded shadow-sm">
                  <h4 className="text-lg font-bold text-blue-900">Local IPA (Rotating)</h4>
                  <p className="text-blue-900 font-semibold">$8</p>
                </div>
              </div>
            </div>
            
            <div className="bg-amber-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Bottled Beers</h3>
              
              <div className="grid gap-4 md:grid-cols-3">
                <div className="bg-white p-3 rounded shadow-sm">
                  <h4 className="text-lg font-bold text-blue-900">Budweiser</h4>
                  <p className="text-blue-900 font-semibold">$5</p>
                </div>
                
                <div className="bg-white p-3 rounded shadow-sm">
                  <h4 className="text-lg font-bold text-blue-900">Coors Light</h4>
                  <p className="text-blue-900 font-semibold">$5</p>
                </div>
                
                <div className="bg-white p-3 rounded shadow-sm">
                  <h4 className="text-lg font-bold text-blue-900">Michelob Ultra</h4>
                  <p className="text-blue-900 font-semibold">$5</p>
                </div>
                
                <div className="bg-white p-3 rounded shadow-sm">
                  <h4 className="text-lg font-bold text-blue-900">Corona</h4>
                  <p className="text-blue-900 font-semibold">$6</p>
                </div>
                
                <div className="bg-white p-3 rounded shadow-sm">
                  <h4 className="text-lg font-bold text-blue-900">Heineken</h4>
                  <p className="text-blue-900 font-semibold">$6</p>
                </div>
                
                <div className="bg-white p-3 rounded shadow-sm">
                  <h4 className="text-lg font-bold text-blue-900">Modelo</h4>
                  <p className="text-blue-900 font-semibold">$6</p>
                </div>
                
                <div className="bg-white p-3 rounded shadow-sm">
                  <h4 className="text-lg font-bold text-blue-900">Guinness</h4>
                  <p className="text-blue-900 font-semibold">$7</p>
                </div>
                
                <div className="bg-white p-3 rounded shadow-sm">
                  <h4 className="text-lg font-bold text-blue-900">Angry Orchard</h4>
                  <p className="text-blue-900 font-semibold">$6</p>
                </div>
                
                <div className="bg-white p-3 rounded shadow-sm">
                  <h4 className="text-lg font-bold text-blue-900">White Claw (ask for flavors)</h4>
                  <p className="text-blue-900 font-semibold">$6</p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Shots Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Game Day Shots</h2>
            
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white p-4 rounded shadow-sm border border-blue-200">
                <h3 className="text-xl font-bold text-blue-900">Touchdown</h3>
                <p className="text-gray-600 mb-2">
                  Fireball whiskey and apple pucker
                </p>
                <p className="text-blue-900 font-semibold">$7</p>
              </div>
              
              <div className="bg-white p-4 rounded shadow-sm border border-blue-200">
                <h3 className="text-xl font-bold text-blue-900">Slam Dunk</h3>
                <p className="text-gray-600 mb-2">
                  Vodka, peach schnapps, and cranberry juice
                </p>
                <p className="text-blue-900 font-semibold">$7</p>
              </div>
              
              <div className="bg-white p-4 rounded shadow-sm border border-blue-200">
                <h3 className="text-xl font-bold text-blue-900">Home Run</h3>
                <p className="text-gray-600 mb-2">
                  Tequila, watermelon pucker, and sweet & sour
                </p>
                <p className="text-blue-900 font-semibold">$8</p>
              </div>
              
              <div className="bg-white p-4 rounded shadow-sm border border-blue-200">
                <h3 className="text-xl font-bold text-blue-900">Penalty Shot</h3>
                <p className="text-gray-600 mb-2">
                  Jägermeister and Red Bull
                </p>
                <p className="text-blue-900 font-semibold">$8</p>
              </div>
            </div>
          </section>
          
          {/* Wine & Non-Alcoholic Section */}
          <section>
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-6">Wine</h2>
                <div className="bg-white p-4 rounded shadow-sm border border-gray-200">
                  <p className="text-gray-600 mb-4">
                    We offer a selection of red and white wines by the glass or bottle.
                  </p>
                  <p className="text-blue-900 font-medium">By the glass: $8-$12</p>
                  <p className="text-blue-900 font-medium">By the bottle: $28-$45</p>
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-6">Non-Alcoholic</h2>
                <div className="bg-white p-4 rounded shadow-sm border border-gray-200">
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Coca-Cola Products</li>
                    <li>Lemonade</li>
                    <li>Iced Tea</li>
                    <li>Red Bull Energy Drink</li>
                    <li>Bottled Water</li>
                    <li>Mock Mojito</li>
                    <li>Strawberry Daiquiri (Non-Alcoholic)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          
          <div className="mt-16 text-center">
            <p className="text-gray-500 italic">
              *Prices subject to change. Please drink responsibly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 
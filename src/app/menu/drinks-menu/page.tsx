import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Drinks Menu | Landshark Bar & Grill | East Lansing, MI',
  description: 'Home of the famous Sharkbowl! Explore our specialty cocktails, beers, and drinks menu. DJ nights Thursday through Saturday at our MSU East Lansing location.',
};

export default function DrinksMenuPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Drinks Menu</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Home of the famous Sharkbowl! Serving East Lansing and the MSU community for over 30 years.
          </p>
        </div>
      </section>

      {/* Drinks Menu Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Signature Cocktails */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
              Landshark Signature Cocktails
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  The Famous Sharkbowl
                </h3>
                <p className="text-gray-600 mb-2 italic">
                  Our legendary signature drink
                </p>
                <p className="text-gray-700 mb-4">
                  A massive 32oz cocktail featuring a blend of rum, vodka, blue curaçao, lemonade, and our secret Landshark mix. Served in our iconic shark-shaped souvenir glass.
                </p>
                <p className="text-blue-900 font-bold">$14.99</p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  Spartan Punch
                </h3>
                <p className="text-gray-600 mb-2 italic">
                  Green and white spirit
                </p>
                <p className="text-gray-700 mb-4">
                  A potent mix of melon liqueur, vodka, pineapple juice, and a splash of sprite. Garnished with MSU green and white sugar rim.
                </p>
                <p className="text-blue-900 font-bold">$9.99</p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  East Lansing Iced Tea
                </h3>
                <p className="text-gray-600 mb-2 italic">
                  Our local twist on a classic
                </p>
                <p className="text-gray-700 mb-4">
                  Vodka, rum, gin, tequila, and triple sec mixed with sour mix and topped with a splash of cola. Stronger than your final exams.
                </p>
                <p className="text-blue-900 font-bold">$10.99</p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  Grand River Margarita
                </h3>
                <p className="text-gray-600 mb-2 italic">
                  Named after our location
                </p>
                <p className="text-gray-700 mb-4">
                  Premium tequila, fresh lime juice, and triple sec served on the rocks with a salt rim. Available in classic, strawberry, or mango.
                </p>
                <p className="text-blue-900 font-bold">$9.99</p>
              </div>
            </div>
          </div>

          {/* Beer Selection */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
              Beer Selection
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-4 text-center">
                  Draft Beers
                </h3>
                <div className="bg-white border border-gray-200 p-6 rounded-lg">
                  <ul className="space-y-4">
                    <li className="flex justify-between">
                      <span className="font-medium">Bud Light</span>
                      <span>$4.99</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Miller Lite</span>
                      <span>$4.99</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Coors Light</span>
                      <span>$4.99</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Blue Moon</span>
                      <span>$5.99</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Bell's Two Hearted Ale</span>
                      <span>$6.99</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Founders All Day IPA</span>
                      <span>$6.99</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Guinness</span>
                      <span>$6.99</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Rotating Michigan Craft Beer</span>
                      <span>$6.99</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-4 text-center">
                  Bottled & Canned
                </h3>
                <div className="bg-white border border-gray-200 p-6 rounded-lg">
                  <ul className="space-y-4">
                    <li className="flex justify-between">
                      <span className="font-medium">Budweiser</span>
                      <span>$4.49</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Bud Light</span>
                      <span>$4.49</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Miller Lite</span>
                      <span>$4.49</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Coors Light</span>
                      <span>$4.49</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Michelob Ultra</span>
                      <span>$4.99</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Corona</span>
                      <span>$5.49</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">White Claw (assorted)</span>
                      <span>$5.99</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Truly (assorted)</span>
                      <span>$5.99</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Wine & Spirits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
              Wine & Spirits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-4 text-center">
                  Wine Selection
                </h3>
                <p className="text-center text-gray-600 mb-4">
                  Available by the glass or bottle
                </p>
                <ul className="space-y-4">
                  <li className="flex justify-between">
                    <span className="font-medium">House Chardonnay</span>
                    <span>$6.99 / $24.99</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">House Pinot Grigio</span>
                    <span>$6.99 / $24.99</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">House Cabernet</span>
                    <span>$6.99 / $24.99</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">House Merlot</span>
                    <span>$6.99 / $24.99</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">House White Zinfandel</span>
                    <span>$6.99 / $24.99</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-4 text-center">
                  Well Spirits
                </h3>
                <ul className="space-y-4">
                  <li className="flex justify-between">
                    <span className="font-medium">Vodka</span>
                    <span>$5.99</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Gin</span>
                    <span>$5.99</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Rum</span>
                    <span>$5.99</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Tequila</span>
                    <span>$5.99</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Whiskey</span>
                    <span>$5.99</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Premium Spirits</span>
                    <span>Starting at $7.99</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Weekly Specials */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
              Weekly Drink Specials
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-2 text-center">
                  Monday
                </h3>
                <ul className="space-y-2 text-center">
                  <li>$3.99 Draft Beers</li>
                  <li>$4.99 Well Drinks</li>
                  <li>$10.99 Sharkbowls</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-2 text-center">
                  Tuesday
                </h3>
                <ul className="space-y-2 text-center">
                  <li>$2.99 Tacos</li>
                  <li>$4.99 Margaritas</li>
                  <li>$14.99 Tequila Pitchers</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-2 text-center">
                  Wednesday
                </h3>
                <ul className="space-y-2 text-center">
                  <li>$0.75 Wings</li>
                  <li>$3.99 Michigan Craft Beers</li>
                  <li>$10 Domestic Buckets</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-2 text-center">
                  Thursday
                </h3>
                <ul className="space-y-2 text-center">
                  <li>$2.99 You-Call-Its</li>
                  <li>$12.99 Sharkbowls</li>
                  <li>DJ Night Starting at 10PM</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-2 text-center">
                  Friday
                </h3>
                <ul className="space-y-2 text-center">
                  <li>$4.99 Spartan Punch</li>
                  <li>$12.99 Pitchers</li>
                  <li>DJ Night Starting at 10PM</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-2 text-center">
                  Saturday
                </h3>
                <ul className="space-y-2 text-center">
                  <li>$12.99 Sharkbowls</li>
                  <li>$4.99 Draft Beers</li>
                  <li>DJ Night Starting at 10PM</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Non-Alcoholic Options */}
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
              Non-Alcoholic Options
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-4 text-center">
                  Soft Drinks
                </h3>
                <ul className="space-y-4">
                  <li className="flex justify-between">
                    <span className="font-medium">Coca-Cola Products</span>
                    <span>$2.99 (free refills)</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Lemonade</span>
                    <span>$2.99 (free refills)</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Iced Tea</span>
                    <span>$2.99 (free refills)</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Red Bull</span>
                    <span>$4.99</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-4 text-center">
                  Mocktails
                </h3>
                <ul className="space-y-4">
                  <li className="flex justify-between">
                    <span className="font-medium">Virgin Sharkbowl</span>
                    <span>$7.99</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Spartan Lemonade</span>
                    <span>$5.99</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Strawberry Daiquiri (non-alcoholic)</span>
                    <span>$5.99</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Piña Colada (non-alcoholic)</span>
                    <span>$5.99</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nightlife Section */}
      <section className="py-12 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Landshark Nightlife</h2>
          <p className="text-xl max-w-3xl mx-auto mb-6">
            DJ NIGHTS EVERY THURSDAY THROUGH SATURDAY
          </p>
          <p className="max-w-2xl mx-auto mb-8">
            Experience the best nightlife in East Lansing! Our resident DJs spin the hottest tracks every Thursday, Friday, and Saturday night starting at 10PM. Join us for drink specials, dancing, and the full Landshark experience!
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-900 px-6 py-3 rounded-lg font-bold hover:bg-blue-100 transition-colors"
          >
            Book a Private Event
          </a>
        </div>
      </section>
    </main>
  );
} 
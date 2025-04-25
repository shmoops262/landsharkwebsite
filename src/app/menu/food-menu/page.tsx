import React from 'react';

export const metadata = {
  title: 'Food Menu | Landshark Sports Bar',
  description: 'Explore our delicious food menu featuring appetizers, burgers, wings, pizzas, and more',
};

export default function FoodMenuPage() {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8 text-center">Food Menu</h1>
          
          {/* Hero Banner */}
          <div className="relative h-64 rounded-lg overflow-hidden mb-12 bg-gradient-to-r from-yellow-600 to-yellow-400">
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white text-xl md:text-2xl font-medium text-center px-6">
                Delicious food for the ultimate game day experience. <br />
                From appetizers to entrees, we've got you covered.
              </p>
            </div>
          </div>
          
          {/* Appetizers Section */}
          <section className="mb-16">
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Starters & Appetizers</h2>
              <p className="text-blue-800 italic mb-4">
                Perfect for sharing with friends while watching the game.
              </p>
              
              <div className="grid gap-6 md:grid-cols-2">
                <div className="bg-white p-4 rounded shadow-sm">
                  <h3 className="text-xl font-bold text-blue-900">Loaded Nachos</h3>
                  <p className="text-gray-600 mb-2">
                    Crispy tortilla chips loaded with cheese, jalapeños, black beans, pico de gallo, guacamole, and sour cream
                  </p>
                  <p className="text-blue-900 font-semibold">$14</p>
                </div>
                
                <div className="bg-white p-4 rounded shadow-sm">
                  <h3 className="text-xl font-bold text-blue-900">Mozzarella Sticks</h3>
                  <p className="text-gray-600 mb-2">
                    Golden-fried mozzarella sticks served with marinara sauce
                  </p>
                  <p className="text-blue-900 font-semibold">$10</p>
                </div>
                
                <div className="bg-white p-4 rounded shadow-sm">
                  <h3 className="text-xl font-bold text-blue-900">Loaded Potato Skins</h3>
                  <p className="text-gray-600 mb-2">
                    Crispy potato skins topped with cheddar cheese, bacon, and green onions, served with sour cream
                  </p>
                  <p className="text-blue-900 font-semibold">$12</p>
                </div>
                
                <div className="bg-white p-4 rounded shadow-sm">
                  <h3 className="text-xl font-bold text-blue-900">Chicken Quesadilla</h3>
                  <p className="text-gray-600 mb-2">
                    Grilled chicken, melted cheese, peppers, and onions in a crispy tortilla, served with salsa and sour cream
                  </p>
                  <p className="text-blue-900 font-semibold">$13</p>
                </div>
                
                <div className="bg-white p-4 rounded shadow-sm">
                  <h3 className="text-xl font-bold text-blue-900">Shark Bites</h3>
                  <p className="text-gray-600 mb-2">
                    Our signature app - breaded shrimp tossed in a spicy sauce, served with ranch dressing
                  </p>
                  <p className="text-blue-900 font-semibold">$14</p>
                </div>
                
                <div className="bg-white p-4 rounded shadow-sm">
                  <h3 className="text-xl font-bold text-blue-900">Spinach & Artichoke Dip</h3>
                  <p className="text-gray-600 mb-2">
                    Creamy spinach and artichoke dip served warm with tortilla chips
                  </p>
                  <p className="text-blue-900 font-semibold">$11</p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Wings Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Landshark Wings</h2>
            
            <div className="bg-orange-50 p-6 rounded-lg">
              <p className="text-blue-800 italic mb-4">
                Our famous wings are available bone-in or boneless, served with celery sticks and your choice of ranch or blue cheese dressing.
              </p>
              
              <div className="grid gap-6 md:grid-cols-3 mb-6">
                <div className="bg-white p-4 rounded shadow-sm text-center">
                  <h3 className="text-xl font-bold text-blue-900">6 Wings</h3>
                  <p className="text-blue-900 font-semibold">$10</p>
                </div>
                
                <div className="bg-white p-4 rounded shadow-sm text-center">
                  <h3 className="text-xl font-bold text-blue-900">12 Wings</h3>
                  <p className="text-blue-900 font-semibold">$18</p>
                </div>
                
                <div className="bg-white p-4 rounded shadow-sm text-center">
                  <h3 className="text-xl font-bold text-blue-900">24 Wings</h3>
                  <p className="text-blue-900 font-semibold">$34</p>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-blue-900 mb-3">Sauces:</h3>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-gray-600">
                <li>Mild Buffalo</li>
                <li>Hot Buffalo</li>
                <li>Atomic</li>
                <li>BBQ</li>
                <li>Honey BBQ</li>
                <li>Teriyaki</li>
                <li>Garlic Parmesan</li>
                <li>Lemon Pepper</li>
                <li>Mango Habanero</li>
              </ul>
            </div>
          </section>
          
          {/* Burgers & Sandwiches Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Burgers & Sandwiches</h2>
            <p className="text-gray-600 mb-6">All burgers and sandwiches are served with your choice of fries, onion rings, or side salad.</p>
            
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white p-4 rounded shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-blue-900">Classic Landshark Burger</h3>
                <p className="text-gray-600 mb-2">
                  ½ pound Angus beef patty with lettuce, tomato, onion, pickle, and American cheese on a brioche bun
                </p>
                <p className="text-blue-900 font-semibold">$14</p>
              </div>
              
              <div className="bg-white p-4 rounded shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-blue-900">Bacon Bleu Burger</h3>
                <p className="text-gray-600 mb-2">
                  ½ pound Angus beef patty topped with blue cheese crumbles, bacon, and caramelized onions
                </p>
                <p className="text-blue-900 font-semibold">$16</p>
              </div>
              
              <div className="bg-white p-4 rounded shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-blue-900">Triple Threat Burger</h3>
                <p className="text-gray-600 mb-2">
                  Our signature burger with three cheeses, bacon, mushrooms, and a fried egg
                </p>
                <p className="text-blue-900 font-semibold">$18</p>
              </div>
              
              <div className="bg-white p-4 rounded shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-blue-900">Buffalo Chicken Sandwich</h3>
                <p className="text-gray-600 mb-2">
                  Crispy chicken breast tossed in buffalo sauce with lettuce, tomato, and ranch dressing
                </p>
                <p className="text-blue-900 font-semibold">$14</p>
              </div>
              
              <div className="bg-white p-4 rounded shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-blue-900">Philly Cheesesteak</h3>
                <p className="text-gray-600 mb-2">
                  Thinly sliced steak with sautéed peppers, onions, and melted provolone cheese on a hoagie roll
                </p>
                <p className="text-blue-900 font-semibold">$15</p>
              </div>
              
              <div className="bg-white p-4 rounded shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-blue-900">Club Sandwich</h3>
                <p className="text-gray-600 mb-2">
                  Triple-decker sandwich with turkey, ham, bacon, cheddar, lettuce, tomato, and mayo on toasted bread
                </p>
                <p className="text-blue-900 font-semibold">$13</p>
              </div>
            </div>
          </section>
          
          {/* Pizza Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Pizzas</h2>
            <p className="text-gray-600 mb-6">Our hand-tossed pizzas are perfect for sharing.</p>
            
            <div className="bg-red-50 p-6 rounded-lg">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="bg-white p-4 rounded shadow-sm">
                  <h3 className="text-xl font-bold text-blue-900">Classic Cheese</h3>
                  <p className="text-gray-600 mb-2">
                    Mozzarella cheese and our signature tomato sauce
                  </p>
                  <p className="text-blue-900 font-semibold">$12</p>
                </div>
                
                <div className="bg-white p-4 rounded shadow-sm">
                  <h3 className="text-xl font-bold text-blue-900">Pepperoni</h3>
                  <p className="text-gray-600 mb-2">
                    Classic cheese pizza topped with pepperoni
                  </p>
                  <p className="text-blue-900 font-semibold">$14</p>
                </div>
                
                <div className="bg-white p-4 rounded shadow-sm">
                  <h3 className="text-xl font-bold text-blue-900">Supreme</h3>
                  <p className="text-gray-600 mb-2">
                    Pepperoni, sausage, bell peppers, onions, mushrooms, and black olives
                  </p>
                  <p className="text-blue-900 font-semibold">$17</p>
                </div>
                
                <div className="bg-white p-4 rounded shadow-sm">
                  <h3 className="text-xl font-bold text-blue-900">Meat Lovers</h3>
                  <p className="text-gray-600 mb-2">
                    Pepperoni, sausage, bacon, ham, and ground beef
                  </p>
                  <p className="text-blue-900 font-semibold">$18</p>
                </div>
                
                <div className="bg-white p-4 rounded shadow-sm">
                  <h3 className="text-xl font-bold text-blue-900">BBQ Chicken</h3>
                  <p className="text-gray-600 mb-2">
                    Grilled chicken, red onions, and cilantro with BBQ sauce
                  </p>
                  <p className="text-blue-900 font-semibold">$16</p>
                </div>
                
                <div className="bg-white p-4 rounded shadow-sm">
                  <h3 className="text-xl font-bold text-blue-900">Vegetarian</h3>
                  <p className="text-gray-600 mb-2">
                    Bell peppers, onions, mushrooms, black olives, and tomatoes
                  </p>
                  <p className="text-blue-900 font-semibold">$15</p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Entrees & Salads Section */}
          <section>
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-6">Entrees</h2>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded shadow-sm border border-gray-200">
                    <h3 className="text-xl font-bold text-blue-900">Fish & Chips</h3>
                    <p className="text-gray-600 mb-2">
                      Beer-battered cod served with fries, coleslaw, and tartar sauce
                    </p>
                    <p className="text-blue-900 font-semibold">$16</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded shadow-sm border border-gray-200">
                    <h3 className="text-xl font-bold text-blue-900">Chicken Tenders Basket</h3>
                    <p className="text-gray-600 mb-2">
                      Crispy chicken tenders served with fries and your choice of dipping sauce
                    </p>
                    <p className="text-blue-900 font-semibold">$14</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded shadow-sm border border-gray-200">
                    <h3 className="text-xl font-bold text-blue-900">Steak & Fries</h3>
                    <p className="text-gray-600 mb-2">
                      8oz sirloin steak cooked to your liking, served with fries and a side salad
                    </p>
                    <p className="text-blue-900 font-semibold">$22</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-6">Salads</h2>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded shadow-sm border border-gray-200">
                    <h3 className="text-xl font-bold text-blue-900">Caesar Salad</h3>
                    <p className="text-gray-600 mb-2">
                      Romaine lettuce, parmesan cheese, croutons, and Caesar dressing
                    </p>
                    <p className="text-blue-900 font-semibold">$10 (add chicken +$4)</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded shadow-sm border border-gray-200">
                    <h3 className="text-xl font-bold text-blue-900">Cobb Salad</h3>
                    <p className="text-gray-600 mb-2">
                      Mixed greens, grilled chicken, bacon, avocado, blue cheese, tomatoes, and hard-boiled egg
                    </p>
                    <p className="text-blue-900 font-semibold">$15</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded shadow-sm border border-gray-200">
                    <h3 className="text-xl font-bold text-blue-900">Taco Salad</h3>
                    <p className="text-gray-600 mb-2">
                      Crispy tortilla bowl filled with lettuce, seasoned ground beef, cheese, pico de gallo, and sour cream
                    </p>
                    <p className="text-blue-900 font-semibold">$14</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <div className="mt-16 text-center">
            <p className="text-gray-500 italic">
              *Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 
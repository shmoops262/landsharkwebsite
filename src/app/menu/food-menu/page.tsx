import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Food Menu | Landshark Bar & Grill | East Lansing, MI',
  description: 'Explore our freshly made-in-house food menu featuring our famous Pesto Chicken Sandwich, Duck Burger, and Greek Pizza. Located near MSU campus in East Lansing.',
};

export default function FoodMenuPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Food Menu</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Freshly made-in-house, American style bar food. Made with the highest quality ingredients.
          </p>
        </div>
      </section>

      {/* Food Menu Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Landshark Signatures */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
              Landshark Signatures
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  The Famous Pesto Chicken Sandwich
                </h3>
                <p className="text-gray-600 mb-2 italic">
                  A Landshark classic for over 30 years
                </p>
                <p className="text-gray-700 mb-4">
                  Grilled chicken breast topped with our house-made pesto sauce, provolone cheese, lettuce, tomato, and mayo on a toasted brioche bun. Served with fries.
                </p>
                <p className="text-blue-900 font-bold">$14.99</p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  Duck Burger
                </h3>
                <p className="text-gray-600 mb-2 italic">
                  An East Lansing favorite
                </p>
                <p className="text-gray-700 mb-4">
                  Our specialty burger made with a blend of duck and beef, topped with smoked gouda, caramelized onions, and our special sauce. Served with fries.
                </p>
                <p className="text-blue-900 font-bold">$16.99</p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  Thin Crust Greek Pizza
                </h3>
                <p className="text-gray-600 mb-2 italic">
                  Perfect for sharing
                </p>
                <p className="text-gray-700 mb-4">
                  Crispy thin crust topped with olive oil, feta cheese, Kalamata olives, red onions, tomatoes, and oregano. Available in 12" or 16".
                </p>
                <p className="text-blue-900 font-bold">$15.99 / $19.99</p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  Spartan Loaded Nachos
                </h3>
                <p className="text-gray-600 mb-2 italic">
                  Great for game day
                </p>
                <p className="text-gray-700 mb-4">
                  Tortilla chips piled high with seasoned ground beef, nacho cheese, pico de gallo, jalapeños, sour cream, and guacamole.
                </p>
                <p className="text-blue-900 font-bold">$13.99</p>
              </div>
            </div>
          </div>

          {/* Appetizers */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
              Starters
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  Shark Bites
                </h3>
                <p className="text-gray-700 mb-4">
                  Crispy fried chicken bites tossed in your choice of sauce: Buffalo, BBQ, Honey Mustard, or Garlic Parmesan.
                </p>
                <p className="text-blue-900 font-bold">$11.99</p>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  Mozzarella Sticks
                </h3>
                <p className="text-gray-700 mb-4">
                  Golden fried mozzarella sticks served with marinara sauce.
                </p>
                <p className="text-blue-900 font-bold">$9.99</p>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  Loaded Tots
                </h3>
                <p className="text-gray-700 mb-4">
                  Crispy tater tots topped with melted cheese, bacon bits, sour cream, and green onions.
                </p>
                <p className="text-blue-900 font-bold">$10.99</p>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  Spinach & Artichoke Dip
                </h3>
                <p className="text-gray-700 mb-4">
                  Creamy spinach and artichoke dip served with tortilla chips.
                </p>
                <p className="text-blue-900 font-bold">$10.99</p>
              </div>
            </div>
          </div>

          {/* Burgers & Sandwiches */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
              Burgers & Sandwiches
            </h2>
            <p className="text-center text-gray-600 mb-8">All served with fries. Substitute onion rings or side salad for $1.99</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  Classic Cheeseburger
                </h3>
                <p className="text-gray-700 mb-4">
                  Angus beef patty with your choice of cheese, lettuce, tomato, onion, and pickle on a toasted brioche bun.
                </p>
                <p className="text-blue-900 font-bold">$13.99</p>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  Spartan Burger
                </h3>
                <p className="text-gray-700 mb-4">
                  Angus beef patty topped with bacon, cheddar cheese, onion rings, and BBQ sauce on a toasted brioche bun.
                </p>
                <p className="text-blue-900 font-bold">$15.99</p>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  Buffalo Chicken Sandwich
                </h3>
                <p className="text-gray-700 mb-4">
                  Crispy or grilled chicken tossed in buffalo sauce with blue cheese dressing, lettuce, and tomato on a toasted brioche bun.
                </p>
                <p className="text-blue-900 font-bold">$14.99</p>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  Grilled Cheese Deluxe
                </h3>
                <p className="text-gray-700 mb-4">
                  A blend of cheddar, provolone, and American cheese with tomato and bacon on grilled sourdough.
                </p>
                <p className="text-blue-900 font-bold">$12.99</p>
              </div>
            </div>
          </div>

          {/* Pizzas */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
              Pizzas
            </h2>
            <p className="text-center text-gray-600 mb-8">All pizzas available in 12" or 16" thin crust</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  Classic Pepperoni
                </h3>
                <p className="text-gray-700 mb-4">
                  Marinara sauce, mozzarella cheese, and pepperoni.
                </p>
                <p className="text-blue-900 font-bold">$13.99 / $17.99</p>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  BBQ Chicken
                </h3>
                <p className="text-gray-700 mb-4">
                  BBQ sauce, grilled chicken, red onions, and mozzarella cheese.
                </p>
                <p className="text-blue-900 font-bold">$14.99 / $18.99</p>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  Meat Lovers
                </h3>
                <p className="text-gray-700 mb-4">
                  Marinara sauce, mozzarella cheese, pepperoni, sausage, bacon, and ham.
                </p>
                <p className="text-blue-900 font-bold">$15.99 / $19.99</p>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  Veggie Supreme
                </h3>
                <p className="text-gray-700 mb-4">
                  Marinara sauce, mozzarella cheese, bell peppers, onions, mushrooms, and black olives.
                </p>
                <p className="text-blue-900 font-bold">$14.99 / $18.99</p>
              </div>
            </div>
          </div>

          {/* Game Day Platters */}
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
              Game Day Platters
            </h2>
            <p className="text-center text-gray-600 mb-8">Perfect for sharing during MSU games</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  Spartan Sampler
                </h3>
                <p className="text-gray-700 mb-4">
                  A combination of mozzarella sticks, chicken wings, loaded tots, and onion rings. Served with various dipping sauces.
                </p>
                <p className="text-blue-900 font-bold">$24.99</p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  Wing Platter
                </h3>
                <p className="text-gray-700 mb-4">
                  30 chicken wings with your choice of up to 3 different sauces. Served with celery, carrots, ranch, and blue cheese.
                </p>
                <p className="text-blue-900 font-bold">$34.99</p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  Slider Sampler
                </h3>
                <p className="text-gray-700 mb-4">
                  12 mini sliders - 4 cheeseburger, 4 buffalo chicken, and 4 pulled pork. Served with fries.
                </p>
                <p className="text-blue-900 font-bold">$29.99</p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  Pizza Combo
                </h3>
                <p className="text-gray-700 mb-4">
                  Two 16" pizzas of your choice, plus a large order of garlic knots with marinara sauce.
                </p>
                <p className="text-blue-900 font-bold">$39.99</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Orders CTA */}
      <section className="py-12 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Planning a Group Event?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-6">
            We offer catering and special menu options for large groups. Perfect for MSU events, watch parties, and gatherings!
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-900 px-6 py-3 rounded-lg font-bold hover:bg-blue-100 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
} 
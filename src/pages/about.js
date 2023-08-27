import MetaHead from "@/components/MetaHead";

export default function About() {
  return (
    <section>
      <MetaHead
        title="About Us"
        description="Ini adalah halaman About Us"
        image={`${process.env.NEXT_PUBLIC_HOST_NAME}/images/logo/nike.svg`}
        url={`${process.env.NEXT_PUBLIC_HOST_NAME}/about`}
      />
      <h1 className="text-2xl font-bold">About Us</h1>
      <p className="py-2">
        Cheesecake gingerbread dragée brownie muffin. Fruitcake wafer chupa
        chups dragée cheesecake. Marshmallow carrot cake bonbon bear claw
        brownie. Marzipan lemon drops powder candy biscuit shortbread sweet.
        Toffee danish topping candy lemon drops lollipop apple pie. Croissant
        chocolate powder cake danish wafer tart jelly. Cookie carrot cake cake
        dragée chocolate cake halvah danish cotton candy lollipop. Dessert
        pastry liquorice lollipop ice cream macaroon. Gingerbread powder dragée
        donut marzipan sugar plum topping ice cream jelly-o. Tootsie roll
        caramels jujubes marshmallow apple pie chocolate oat cake. Dragée
        topping tart tiramisu sugar plum marzipan. Liquorice lollipop cotton
        candy jelly beans cheesecake.
      </p>
      <p className="py-2">
        Muffin sugar plum candy liquorice pie tootsie roll fruitcake. Sweet
        gummies fruitcake sugar plum cake chocolate bear claw gummies. Fruitcake
        sweet topping jelly beans caramels cotton candy marzipan. Powder danish
        icing gummi bears tootsie roll tootsie roll caramels jelly. Sweet roll
        dessert sweet roll halvah croissant halvah chocolate chupa chups icing.
        Apple pie halvah croissant croissant chocolate. Chocolate icing sugar
        plum gummi bears tootsie roll wafer powder oat cake chocolate cake.
        Cupcake cupcake icing tart cookie soufflé. Sweet cookie sesame snaps
        cheesecake danish chocolate jelly beans. Tiramisu cotton candy macaroon
        marshmallow donut toffee cotton candy caramels. Jelly cake ice cream
        danish jelly-o. Jujubes cheesecake marshmallow gingerbread gingerbread
        dessert.
      </p>
    </section>
  );
}

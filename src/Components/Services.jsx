

const Services = () => {
  return (
    <div className="mt-10 max-w-screen-4xl  mx-auto">
      <div className="flex flex-col justify-center items-center ">
        <div className="text-xl md:text-3xl text-green-500 font-bold capitalize">Service and Support</div>
        <div className="border-b-4 border-green-500 -mt-2"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div>
        <div className="text-black text-center mt-5 max-w-screen-lg">Get your questions answered about product setup, use and care, repair and maintenance issues. We can help.
        </div>
      </div>
      <div className="  p-5 grid lg:grid-cols-3 gap-10 my-5">
        <div className="space-y-2 mx-auto">
          <img src="https://i.ibb.co/Bs5j74y/telephone.jpg" alt="" />
          <h2 className="text-2xl font-medium">Telephone</h2>
          <p>Call an LG Support Representative at</p>
          <p>09678 545454</p>
          <p>Sunday to Saturday (including Public Holiday):</p>
          <p>8:30am to 8:30pm</p>
        </div>
        <div className="space-y-2 mx-auto">
          <img src="https://i.ibb.co/fH4FVJM/email.jpg" alt="" />
          <h2 className="text-2xl font-medium">Email</h2>
          <p>No time to chat?</p>
          <p>Send our support inquiry</p>
        </div>
        <div className="space-y-2  mx-auto">
          <img className="h-20 w-20" src="https://i.ibb.co/Z1jzN60/fee.jpg" alt="" />
          <h2 className="text-2xl font-medium">Feedback</h2>
          <p>Customer Feedback</p>

        </div>
      </div>
    </div>
  );
};

export default Services;

//
//
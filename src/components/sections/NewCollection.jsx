import React from 'react';
import CollectionCard from '../ui/CollectionCard';

const NewCollection = () => {
  // Sample data - in a real app, this would come from an API or props
  const collections = [
    {
      id: 1,
      title: 'Summer Collection',
      image: 'https://via.placeholder.com/600x800',
    },
    {
      id: 2,
      title: 'Winter Essentials',
      image: 'https://via.placeholder.com/600x800',
    },
    {
      id: 3,
      title: 'Accessories',
      image: 'https://via.placeholder.com/600x800',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-medium mb-4">New Collections</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptas ut dolorum consequuntur, adipisci repellat! Eveniet commodi voluptatem voluptate, eum minima, in suscipit explicabo voluptatibus harum, quibusdam ex repellat eaque!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collections.map((collection) => (
            <CollectionCard key={collection.id} collection={collection} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewCollection;
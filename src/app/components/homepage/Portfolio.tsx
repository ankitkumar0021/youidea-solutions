// Portfolio.tsx
'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { HiExternalLink } from 'react-icons/hi';
import ImageComponent from '../ui/ImageComponent';

const CATEGORY_KEYS = ['ecommerce', 'mobile', 'web', 'branding', 'default'] as const;
type Category = typeof CATEGORY_KEYS[number]; // 'ecommerce' | 'mobile' | 'web' | 'branding' | 'default'

const categoryImages: Record<Category, string> = {
	ecommerce: '/home/ec.jpg',
	mobile: '/home/mobile.jpg',
	web: '/home/web.jpg',
	branding: '/home/branding.jpg',
	default: '/home/default.jpg',
};

type Project = {
	id: number;
	title: string;
	category: Category;
	description: string;
	image?: string;
};

const projects: Project[] = [
	{ id: 1, title: 'E-Commerce Platform', category: 'ecommerce', description: 'A fully-featured online shopping solution.', image: '/home/ec1.jpg' },
	{ id: 2, title: 'Mobile App', category: 'mobile', description: 'Workout tracking and nutrition planning app.', image: '/home/mobile.jpg' },
	{ id: 3, title: 'Corporate Website Redesign', category: 'web', description: 'Modern website for a financial services company.', image: '/home/ec.jpg' },
	{ id: 4, title: 'Restaurant Branding', category: 'branding', description: 'Complete branding package for a new restaurant.', image: '/home/res.jpg' },
	{ id: 5, title: 'Real Estate Portal', category: 'web', description: 'Property listing and management system.', image: '/home/real.jpg' },
	{ id: 6, title: 'Gaming Mobile App', category: 'mobile', description: 'Multiplayer mobile game with social features.', image: '/home/game.jpg' }
];

const Portfolio: React.FC = () => {
	const [activeFilter, setActiveFilter] = useState<'all' | Category>('all');

	const filteredProjects = activeFilter === 'all'
		? projects
		: projects.filter(p => p.category === activeFilter);

	return (
		<section id="portfolio" className="py-20 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
					<div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">Check out some of our recent projects and see the quality of our work.</p>
				</div>

				<div className="flex flex-wrap justify-center gap-4 mb-12">
					{[
						{ name: 'All', value: 'all' },
						{ name: 'Web Design', value: 'web' },
						{ name: 'Mobile Apps', value: 'mobile' },
						{ name: 'E-Commerce', value: 'ecommerce' },
						{ name: 'Branding', value: 'branding' },
					].map(filter => (
						<button
							key={filter.value}
							onClick={() => setActiveFilter(filter.value as 'all' | Category)}
							className={`px-5 py-2 rounded-full font-medium transition-all ${
								activeFilter === filter.value
									? 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white'
									: 'bg-gray-100 text-gray-700 hover:bg-gray-200'
							}`}
						>
							{filter.name}
						</button>
					))}
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{filteredProjects.length === 0 ? (
						<div className="col-span-full text-center">
							<p className="text-gray-600">No projects found for this category.</p>
						</div>
					) : (
						filteredProjects.map(project => {
							// now safe: project.category is typed as Category
							const imageUrl = project.image ?? categoryImages[project.category] ?? categoryImages.default;

							return (
								<div key={project.id} className="bg-gradient-to-b from-white to-blue-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-blue-100">
									<div className="h-56 bg-gradient-to-r from-blue-100 to-indigo-100 flex items-center justify-center">
										<Link href={`#`} className="relative block w-full h-full rounded-xl overflow-hidden" aria-label={`Open banner`}>
											<ImageComponent url={imageUrl} img_title={`${project.title} banner`} object_cover={true} />
											<div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/30 via-transparent to-black/10" />
										</Link>
									</div>
									<div className="p-6">
										<span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full mb-3">{project.category}</span>
										<h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
										<p className="text-gray-600 mb-4">{project.description}</p>
										{/* <a href="#" className="text-blue-600 font-medium flex items-center hover:text-blue-800">View Project <HiExternalLink className="ml-2" /></a> */}
									</div>
								</div>
							);
						})
					)}
				</div>
			</div>
		</section>
	);
};

export default Portfolio;

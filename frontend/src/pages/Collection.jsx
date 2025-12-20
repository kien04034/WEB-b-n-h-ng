import React, { useEffect, useReducer, useMemo } from 'react';
<<<<<<< Updated upstream
import { useShop } from '../context/ShopContext';
=======
import { useShop } from '../context/ShopContex';
>>>>>>> Stashed changes
import { assets } from '../assets/frontend_assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

<<<<<<< Updated upstream
// ---------- State Management ----------
const initialState = {
    category: [],
    subCategory: [],
    showFilter: false,
    filterProducts: [],
    sortOrder: 'relevant',
=======
const initialState = {
    selectedTags: [],
    showFilter: false,
    filterProducts: [],
    sortOrder: 'relevant',
    priceFrom: '',
    priceTo: '',
>>>>>>> Stashed changes
};

const reducer = (state, action) => {
    switch (action.type) {
<<<<<<< Updated upstream
        case 'TOGGLE_CATEGORY':
            return { ...state, category: toggleItem(state.category, action.payload) };
        case 'TOGGLE_SUBCATEGORY':
            return { ...state, subCategory: toggleItem(state.subCategory, action.payload) };
=======
        case 'TOGGLE_TAG':
            return { ...state, selectedTags: toggleItem(state.selectedTags, action.payload) };
>>>>>>> Stashed changes
        case 'SET_FILTER_PRODUCTS':
            return { ...state, filterProducts: action.payload };
        case 'SET_SHOW_FILTER':
            return { ...state, showFilter: action.payload };
        case 'SET_SORT_ORDER':
            return { ...state, sortOrder: action.payload };
<<<<<<< Updated upstream
=======
        case 'SET_PRICE_FROM':
            return { ...state, priceFrom: action.payload };
        case 'SET_PRICE_TO':
            return { ...state, priceTo: action.payload };
>>>>>>> Stashed changes
        default:
            return state;
    }
};

const toggleItem = (list, value) =>
    list.includes(value) ? list.filter(item => item !== value) : [...list, value];

const sortProducts = (productsToSort, sortOrder) => {
    switch (sortOrder) {
        case 'low-high':
            return [...productsToSort].sort((a, b) => a.price - b.price);
        case 'high-low':
            return [...productsToSort].sort((a, b) => b.price - a.price);
        case 'relevant':
        default:
            return productsToSort;
    }
};

<<<<<<< Updated upstream
// ---------- Main Component ----------
function Collection() {
    const { products, search, showSearch } = useShop();
    const [state, dispatch] = useReducer(reducer, initialState);
    const { category, subCategory, showFilter, filterProducts, sortOrder } = state;
=======
function Collection() {
    const { products, tagGroups, search, showSearch } = useShop();
    const [state, dispatch] = useReducer(reducer, initialState);
    const { selectedTags, showFilter, filterProducts, sortOrder, priceFrom, priceTo } = state;
>>>>>>> Stashed changes

    const memoizedProducts = useMemo(() => products, [products]);

    const handleToggle = (type, value) => {
        dispatch({ type, payload: value });
    };

    const handleSortChange = (e) => {
        dispatch({ type: 'SET_SORT_ORDER', payload: e.target.value });
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            let filtered = memoizedProducts;
<<<<<<< Updated upstream
            if (category.length) {
                filtered = filtered.filter(item => category.includes(item.category));
            }
            if (subCategory.length) {
                filtered = filtered.filter(item => subCategory.includes(item.subCategory));
            }
=======

            // Filter by selected tags
            if (selectedTags.length) {
                filtered = filtered.filter(item => {
                    if (!item.tags || item.tags.length === 0) return false;

                    // Lấy danh sách ID của tags trong product
                    const productTagIds = item.tags.map(tag => tag._id || tag);

                    // Kiểm tra selectedTags có phải tập con của productTagIds không
                    return selectedTags.every(selectedTag =>
                        productTagIds.includes(selectedTag)
                    );
                });
            }

            // Filter by search
>>>>>>> Stashed changes
            if (showSearch && search) {
                filtered = filtered.filter(item =>
                    item.name.toLowerCase().includes(search.toLowerCase())
                );
            }
<<<<<<< Updated upstream
=======

            // Filter by price range
            const minPrice = priceFrom ? parseFloat(priceFrom) : 0;
            const maxPrice = priceTo ? parseFloat(priceTo) : Infinity;

            if (priceFrom || priceTo) {
                filtered = filtered.filter(item =>
                    item.price >= minPrice && item.price <= maxPrice
                );
            }

>>>>>>> Stashed changes
            const sorted = sortProducts(filtered, sortOrder);
            dispatch({ type: 'SET_FILTER_PRODUCTS', payload: sorted });
        }, 100); // debounce delay

        return () => clearTimeout(timeout);
<<<<<<< Updated upstream
    }, [memoizedProducts, category, subCategory, sortOrder, search, showSearch]);
=======
    }, [memoizedProducts, selectedTags, sortOrder, search, showSearch, priceFrom, priceTo]);
>>>>>>> Stashed changes

    return (
        <div className="flex flex-col gap-1 sm:flex-row sm:gap-10 pt-10 border-t-2 border-gray-300">
            {/* Left: Filter Options */}
            <div className="min-w-60">
                <p
                    onClick={() => handleToggle('SET_SHOW_FILTER', !showFilter)}
                    className="text-xl flex items-center gap-2 my-2 cursor-pointer sm:cursor-default"
                >
<<<<<<< Updated upstream
                    FILTERS
=======
                    Filters
>>>>>>> Stashed changes
                    <img
                        className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`}
                        src={assets.dropdown_icon}
                        alt="Toggle"
                    />
                </p>

<<<<<<< Updated upstream
                {/* Category Filter */}
                <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
                    <p className="mb-3 font-medium text-sm">CATEGORIES</p>
                    <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                        {['Men', 'Women', 'Kids'].map(label => {
                            const id = `category-${label}`;
                            return (
                                <div key={label} className="flex gap-2 items-center">
                                    <input
                                        id={id}
                                        type="checkbox"
                                        value={label}
                                        onChange={(e) => handleToggle('TOGGLE_CATEGORY', e.target.value)}
                                        className="w-3"
                                    />
                                    <label htmlFor={id}>{label}</label>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* SubCategory Filter */}
                <div className={`border border-gray-300 pl-5 py-3 mt-6 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
                    <p className="mb-3 text-sm font-medium">TYPE</p>
                    <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                        {['Topwear', 'Bottomwear', 'Winterwear'].map(label => {
                            const id = `subcategory-${label}`;
                            return (
                                <div key={label} className="flex gap-2 items-center">
                                    <input
                                        id={id}
                                        type="checkbox"
                                        value={label}
                                        onChange={(e) => handleToggle('TOGGLE_SUBCATEGORY', e.target.value)}
                                        className="w-3"
                                    />
                                    <label htmlFor={id}>{label}</label>
                                </div>
                            );
                        })}
                    </div>
                </div>
=======
                {/* Price Range Filter */}
                <div className={`border border-gray-300 pl-5 pr-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
                    <p className="mb-3 font-medium text-sm uppercase">Khoảng giá</p>
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="price-from" className="text-xs text-gray-600">Từ</label>
                            <input
                                id="price-from"
                                type="number"
                                placeholder="0"
                                min="0"
                                value={priceFrom}
                                onChange={(e) => dispatch({ type: 'SET_PRICE_FROM', payload: e.target.value })}
                                className="border border-gray-300 px-2 py-1 text-sm rounded w-full"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="price-to" className="text-xs text-gray-600">Đến</label>
                            <input
                                id="price-to"
                                type="number"
                                placeholder="Không giới hạn"
                                min="0"
                                value={priceTo}
                                onChange={(e) => dispatch({ type: 'SET_PRICE_TO', payload: e.target.value })}
                                className="border border-gray-300 px-2 py-1 text-sm rounded w-full"
                            />
                        </div>
                    </div>
                </div>

                {/* Tag Groups Filter */}
                {tagGroups.map((group) => (
                    <div
                        key={`group-${group.id}`}
                        className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}
                    >
                        <p className="mb-3 font-medium text-sm uppercase">{group.name}</p>
                        <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                            {group.tags && group.tags.length > 0 ? (
                                group.tags.map(tag => {
                                    const inputId = `tag-${group.id}-${tag.id}`;
                                    return (
                                        <div key={`${group.id}-${tag.id}`} className="flex gap-2 items-center">
                                            <input
                                                id={inputId}
                                                type="checkbox"
                                                value={tag.id}
                                                checked={selectedTags.includes(tag.id)}
                                                onChange={(e) => handleToggle('TOGGLE_TAG', e.target.value)}
                                                className="w-3"
                                            />
                                            <label htmlFor={inputId} className="cursor-pointer">
                                                {tag.name}
                                            </label>
                                        </div>
                                    );
                                })
                            ) : (
                                <p className="text-xs text-gray-400">Chưa có tag nào</p>
                            )}
                        </div>
                    </div>
                ))}
>>>>>>> Stashed changes
            </div>

            {/* Right: Product List */}
            <div className="flex-1">
                <div className="flex justify-between text-base sm:text-2xl mb-4">
                    <Title text1="ALL" text2="COLLECTIONS" />

                    {/* Sort Dropdown */}
                    <select
                        onChange={handleSortChange}
                        className="border-2 border-gray-300 text-sm px-2"
                        value={sortOrder}
                    >
<<<<<<< Updated upstream
                        <option value="relevant">Sort by: Relevant</option>
                        <option value="high-low">Sort by: High to Low</option>
                        <option value="low-high">Sort by: Low to High</option>
=======
                        <option value="relevant">Sắp xếp: Liên quan</option>
                        <option value="high-low">Sắp xếp: Giá cao đến thấp</option>
                        <option value="low-high">Sắp xếp: Giá thấp đến cao</option>
>>>>>>> Stashed changes
                    </select>
                </div>

                {/* Product Grid or Fallback Message */}
                {filterProducts.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                        {filterProducts.map(item => (
                            <ProductItem
                                key={item._id}
                                id={item._id}
                                image={item.image}
                                name={item.name}
                                price={item.price}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="text-center text-gray-600 py-10">
<<<<<<< Updated upstream
                        No products found.
=======
                        Không tìm thấy sản phẩm nào.
>>>>>>> Stashed changes
                    </div>
                )}
            </div>
        </div>
    );
}

export default Collection;
